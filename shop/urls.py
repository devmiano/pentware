from django.urls import path
from .views import *

urlpatterns = [
    path('products/', Products.as_view(), name='products'),
    path('categories/', Categories.as_view(), name='categories'),
]