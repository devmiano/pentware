from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import *


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/token/verify',
        '/api/token/refresh',
        '/api/auth/register',
        '/api/auth/user/<pk>',
    ]

    return Response(routes)


class UserTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserTokenObtainPairSerializer
