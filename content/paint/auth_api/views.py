from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from django.contrib.auth.models import User
# from .serializers import UserSerializer, PostSerializer


@api_view(['GET'])
def get_links(request):
   endpoints = {
    'all':'/api/',
    'all_todos':'/api/todos'
   }
   return Response(endpoints)
  

   
   