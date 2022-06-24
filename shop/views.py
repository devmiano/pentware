from rest_framework.views import APIView
from rest_framework import generics, status, permissions, viewsets
from .models import *
from .serializers import *


class CategoryListView(generics.ListAPIView):
    model = Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductListView(generics.ListCreateAPIView):
    model = Product
    serializer_class = ProductListSerializer
    queryset = Product.objects.all()


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
