from django.shortcuts import render
from users.models import UserAccount
from users.serializers import UserDetails

from rest_framework.decorators import api_view  
from rest_framework.response import Response



@api_view(['POST'])
def UserDetail(request):
    user = UserAccount.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = UserDetails(user,many=False)
    return Response(serializer.data)