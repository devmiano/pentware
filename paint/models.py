from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


# class User(AbstractUser):
#     is_customer = models.BooleanField(default=False)
#     is_retailer = models.BooleanField(default=False)
#     is_admin = models.BooleanField(default=False)
    

# class Product(models.Model):
#     name = models.CharField(max_length=50)
#     price = models.IntegerField()
#     product_image= models.ImageField(upload_to='images/')
#     description = models.TextField(max_length=300)
#     quantity= models.IntegerField(null=True, blank=True)
#     Category = models.ForeignKey("Category", on_delete=models.CASCADE)
#     Retailer=models.ForeignKey("Retailer",on_delete=models.CASCADE)

# class Category(models.Model):
#     name = models.CharField(max_length=50)
#     category_image= models.ImageField(upload_to='images/')
#     products=models.ForeignKey("Product",on_delete=models.CASCADE)


# class Retailer(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     name = models.CharField(max_length=50)
#     account = models.ForeignKey("Account", on_delete=models.CASCADE)
#     products=models.ForeignKey("Product",on_delete=models.CASCADE)
    

# class Review(models.Model):
#     rate=models.IntegerField()
#     content=models.TextField(max_length=1000)
#     products=models.ForeignKey("Product",on_delete=models.CASCADE)


# class Customer(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     name = models.CharField(max_length=50)
#     address = models.IntegerField()
#     city = models.TextField(max_length=20)
#     county= models.TextField(max_length=20)
#     account = models.ForeignKey("Account", on_delete=models.CASCADE)

# class Account(models.Model):
#     name = models.CharField(max_length=50)
#     phone_number= models.IntegerField()
#     email= models.EmailField(max_length=60)
#     bio= models.TextField(max_length=100)
    

# class Admin(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
#     name = models.CharField(max_length=50)
#     email= models.EmailField(max_length=60)
#     account = models.ForeignKey("Account", on_delete=models.CASCADE)
