from django.urls import path,include
from . import views



urlpatterns =[
    path('api/product/', views.ProductList.as_view()),
    path('api/category/', views.CategoryList.as_view()),
    path('api/retailer/', views.RetailerList.as_view()),
    path('api/review/', views.ReviewList.as_view()),
    path('api/customer/', views.CustomerList.as_view()),
    path('api/account/', views.AccountList.as_view()),
    path('api/admin/', views.AdminList.as_view()),
    path('api/abstractuser/', views.AbstractUserList.as_view()),
]
