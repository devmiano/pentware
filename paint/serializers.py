# from rest_framework import serializers
# from .models import User,Product,Category,Retailer,Review,Customer,Account,Admin
# from django.contrib.auth.models import AbstractUser

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['name','price', 'product_image','description', 'quantity','Category',' Retailer']


# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['name','category_image','products']


# class RetailerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Retailer
#         fields = ['name','account','products']


# class ReviewSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Review
#         fields = ['rate','content', 'products']


# class CustomerSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Customer
#         fields = ['name','address', 'city','county', 'account']


# class AccountSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Account 
#         fields = ['name', 'phone_number','email', 'bio']


# class AdminSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Admin
#         fields =  ['name','email','account']


# class AbstractUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = ['is_customer','is_retailer','is_admin']
