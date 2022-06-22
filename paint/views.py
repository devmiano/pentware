from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import HttpResponse
from rest_framework import status
from django.contrib.auth.models import User
# from .serializers import ProductSerializer,CategorySerializer,RetailerSerializer,ReviewSerializer,CustomerSerializer,AccountSerializer,AdminSerializer,AbstractUserSerializer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] = user.email
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

def home(request):
    return HttpResponse('hello')

@api_view(['GET'])
def get_links(request):
   endpoints = {
    'all':'/api/',
    'all_todos':'/api/todos'
   }
   return Response(endpoints)

@api_view(['POST'])
def register(request):
   endpoints = {
    'all':'/api/',
    'all_todos':'/api/todos'
   }
   username = request.data['username']
   email = request.data['email']
   password = request.data['password']
   print(username)
   print(password)
   if User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
       mess = {'error':'Username and email is taken'}
       return Response(mess, status=status.HTTP_412_PRECONDITION_FAILED)
   else:
       user = User.objects.create_user(username=username, email=email, password=password)
       user.save()
       mess = {'message':'Username creation successfull'}
       return Response(mess, status=status.HTTP_200_OK)


# # Create your views here.
# class ProductList(APIView):
#     def get(self,request,format=None):
#         product = Product.objects.all()
#         serializers = ProductSerializer(product, many=True)
#         return Response(serializers.data)

# class CategoryList(APIView):
#     def get(self,request,format=None):
#         category = Category.objects.all()
#         serializers = CategorySerializer(category, many=True)
#         return Response(serializers.data)

# class RetailerList(APIView):
#     def get(self,request,format=None):
#         retailer = Retailer.objects.all()
#         serializers = RetailerSerializer(retailer, many=True)
#         return Response(serializers.data)

# class ReviewList(APIView):
#     def get(self,request,format=None):
#         review = Review.objects.all()
#         serializers = ReviewSerializer(review, many=True)
#         return Response(serializers.data)

# class CustomerList(APIView):
#     def get(self,request,format=None):
#         customer = Customer.objects.all()
#         serializers = CustomerSerializer(customer, many=True)
#         return Response(serializers.data)

# class AccountList(APIView):
#     def get(self,request,format=None):
#         account = Account.objects.all()
#         serializers = AccountSerializer(account, many=True)
#         return Response(serializers.data)

# class AdminList(APIView):
#     def get(self,request,format=None):
#         admin = Admin.objects.all()
#         serializers = AdminSerializer(admin, many=True)
#         return Response(serializers.data)


# class AbstractUserList(APIView):
#     def get(self,request,format=None):
#         user = AbstractUser.objects.all()
#         serializers = AbstractUserSerializer(user, many=True)
#         return Response(serializers.data)

