from django.urls import path,include
from . import views
from.views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns =[
    path('', views.home),
    path('api/links/', views.get_links),
    path('api/user/<pk>', views.get_user),
    path('api/register/', views.register),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/product/', views.ProductList.as_view()),
    # path('api/category/', views.CategoryList.as_view()),
    # path('api/retailer/', views.RetailerList.as_view()),
    # path('api/review/', views.ReviewList.as_view()),
    # path('api/customer/', views.CustomerList.as_view()),
    # path('api/account/', views.AccountList.as_view()),
    # path('api/admin/', views.AdminList.as_view()),
    # path('api/abstractuser/', views.AbstractUserList.as_view()),
]
