from rest_framework.views import APIView
from rest_framework import generics, status, permissions, viewsets
from .models import *
from .serializers import *


class Categories(generics.ListCreateAPIView):
    model = Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class Products(generics.ListCreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
