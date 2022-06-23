from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer,CategorySerializer,RetailerSerializer,ReviewSerializer,CustomerSerializer,AccountSerializer,AdminSerializer,AbstractUserSerializer
from .models import Product,Category,Retailer,Review,Customer,Account,Admin,AbstractUser
from django.contrib.auth.decorators import login_required,permission_required


# Create your views here.

class ProductList(APIView):
    def get(self,request,format=None):
        product = Product.objects.all()
        serializers = ProductSerializer(product, many=True)
        return Response(serializers.data)

class CategoryList(APIView):
    def get(self,request,format=None):
        category = Category.objects.all()
        serializers = CategorySerializer(category, many=True)
        return Response(serializers.data)

class RetailerList(APIView):
    def get(self,request,format=None):
        retailer = Retailer.objects.all()
        serializers = RetailerSerializer(retailer, many=True)
        return Response(serializers.data)

class ReviewList(APIView):
    def get(self,request,format=None):
        review = Review.objects.all()
        serializers = ReviewSerializer(review, many=True)
        return Response(serializers.data)

class CustomerList(APIView):
    def get(self,request,format=None):
        customer = Customer.objects.all()
        serializers = CustomerSerializer(customer, many=True)
        return Response(serializers.data)

class AccountList(APIView):
    def get(self,request,format=None):
        account = Account.objects.all()
        serializers = AccountSerializer(account, many=True)
        return Response(serializers.data)

class AdminList(APIView):
    def get(self,request,format=None):
        admin = Admin.objects.all()
        serializers = AdminSerializer(admin, many=True)
        return Response(serializers.data)


class AbstractUserList(APIView):
    def get(self,request,format=None):
        user = AbstractUser.objects.all()
        serializers = AbstractUserSerializer(user, many=True)
        return Response(serializers.data)


