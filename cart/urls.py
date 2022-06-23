from django.urls import path
from .views import *

urlpatterns = [
    path('', get_cart),
    path('add/', add_to_cart),
    path('remove_item/', remove_from_cart),
    path('remove_cart/', remove_cart),
]
