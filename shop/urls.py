from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListView.as_view(), name='products'),
    path('categories/', CategoryListView.as_view(), name='categories'),
    path('product-details/', ProductListView.as_view(), name='product-details'),
]
