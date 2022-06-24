from unicodedata import category
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
    lookup_field = 'slug'


class CategoryView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductDetailSerializer

    def get(self, pk):
        cat = Category.objects.get(id=pk)
        queryset = Product.objects.filter(category=cat).all()

        return queryset
