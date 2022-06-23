from django.urls import path
from . import views


urlpatterns = [
    path('user/<pk>', views.get_user),
    path('register/', views.register),
]
