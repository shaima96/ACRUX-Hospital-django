from django.shortcuts import render
from rest_framework import generics
from patient.serializers import PatientsSerializer
from patient.models import Patient

from rest_framework.decorators import api_view  
from rest_framework.response import Response
# Create your views here.

class PatientList(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientsSerializer


@api_view(['POST'])
def PateintDetails(request):
    patient = Patient.objects.get(pk=request.data['pk']) # the 'get' return me back a model I can serialize
    serializer = PatientsSerializer(patient,many=False)
    return Response(serializer.data)