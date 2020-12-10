from django.shortcuts import render
from rest_framework import generics
from day.models import Day,Hour
from day.serializers import DaySerializer,HourSerializer
# Create your views here.

class DayList(generics.ListCreateAPIView):
    queryset = Day.objects.all()
    serializer_class = DaySerializer


class HourList(generics.ListCreateAPIView):
    queryset = Hour.objects.all()
    serializer_class = HourSerializer
