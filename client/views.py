from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserSerializer


@api_view(['GET'])
def get_user(request, pk):
    user = User.objects.get(id=pk)
    serilizaer = UserSerializer(user)
    return Response(serilizaer.data)


@api_view(['POST'])
def register(request):
    username = request.data['username']
    email = request.data['email']
    password = request.data['password']
    print(username)
    print(password)
    if User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
        mess = {'error': 'Username and email is taken'}
        return Response(mess, status=status.HTTP_412_PRECONDITION_FAILED)
    else:
        user = User.objects.create_user(
            username=username, email=email, password=password)
        user.save()
        mess = {'message': 'Account created successfully'}
        return Response(mess, status=status.HTTP_200_OK)
