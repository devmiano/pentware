from django.urls import path
from .views import *


urlpatterns = [
    path('signup', RegisterClientView.as_view()),
    path('resident', RetrieveClientView.as_view()),
]
