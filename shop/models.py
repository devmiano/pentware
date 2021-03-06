import uuid
import cloudinary
from django.db import models
from ckeditor.fields import RichTextField
from cloudinary.models import CloudinaryField
from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=50)
    photo = cloudinary.models.CloudinaryField('image')
    slug = models.SlugField(max_length=200, unique=True)

    class Meta:
        ordering = ('name', )
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name = models.CharField(max_length=200)
    photo = cloudinary.models.CloudinaryField('image')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField(default=0)
    description = models.TextField()
    slug = models.SlugField(max_length=200, unique=True)
    manufactured_on = models.DateTimeField()
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products')
    features = RichTextField(blank=True)

    class Meta:
        ordering = ('name', )
        verbose_name = 'product'
        verbose_name_plural = 'products'

    def get_absolute_url(self):
        return reverse('project-detail', kwargs={"slug": self.slug})

    def __str__(self):
        return self.name
