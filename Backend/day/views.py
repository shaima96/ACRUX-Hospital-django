from django.shortcuts import render
from rest_framework import generics
from day.models import Day,Hour
from day.serializers import DaySerializer,HourSerializer

from rest_framework.decorators import api_view  
from rest_framework.response import Response
# Create your views here.

class DayList(generics.ListCreateAPIView):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class HourList(generics.ListCreateAPIView):
    queryset = Hour.objects.all()
    serializer_class = HourSerializer

@api_view(['POST'])
def DayDetail(request):
    day = Day.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = DaySerializer(day,many=False)
    return Response(serializer.data)
