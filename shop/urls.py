from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListView.as_view(), name='products'),
    path('categories/', CategoryListView.as_view(), name='categories'),
    path('product/<slug:slug>', ProductDetailView.as_view(), name='product'),
]
