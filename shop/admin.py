from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    prepopulated_fields = {'slug': ('name',)}


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock',)
    prepopulated_fields = {'slug': ('id',)}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
