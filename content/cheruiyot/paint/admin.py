from itertools import product
from django.contrib import admin
from .models import Retailer,User, Account, Product,Category

class RetailerAdmin(admin.ModelAdmin):
    list_display= ['user', 'name', 'account', 'products']
    
    def get_queryset(self, request):
        qs = super().get_queryset(request)
        if request.user_is_superuser:
            return qs
        return qs.filter(user=request.user)
    
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "user":
            kwargs["queryset"] =User.objects.filter(name=request.user.name)
        return super().formfield_for_foreignkey(db_field, request,**kwargs) 
    
admin.site.register(Retailer,RetailerAdmin)
admin.site.register(User)
admin.site.register(Account)
admin.site.register(Product)
admin.site.register(Category)