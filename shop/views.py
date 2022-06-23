from rest_framework.views import APIView
from rest_framework import generics, status, permissions, viewsets
from .models import *
from .serializers import *


# def home(request):
#   products = Product.objects.all()
#   categories = Category.objects.all()
#   return render(request, 'shop/index.html', {
#       'products': products,
#       'categories': categories
#   })


# def product_detail(request, slug):
#   product = get_object_or_404(Product, slug=slug)
#   categories = Category.objects.all()
#   similar_items = Product.objects.filter(
#       category=product.category).exclude(slug=slug)
#   return render(request, 'shop/detail.html', {
#       'product': product,
#       'similar_items': similar_items,
#       'categories': categories
#   })


# def category(request, slug):
#   products = Product.objects.filter(category__slug=slug)
#   categories = Category.objects.all()
#   return render(request, 'shop/index.html', {
#       'products': products,
#       'name': slug,
#       'categories': categories
#   })


# def search(request):
#   query = request.GET.get('q')
#   categories = Category.objects.all()
#   if not query:
#     return redirect('shop:home')

#   # search in title, description, or features
#   products = Product.objects.filter(category__name__icontains=query) | Product.objects.filter(
#       name__icontains=query) | Product.objects.filter(description__icontains=query) | Product.objects.filter(features__icontains=query)

#   return render(request, 'shop/index.html', {
#       'products': products,
#       'name': 'Search Results',
#       'categories': categories
#   })


class Category(generics.ListCreateAPIView):
    model = Category
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class Product(generics.ListCreateAPIView):
    model = Product
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
