from django.shortcuts import render
from rest_framework import generics
from patient.models import Patient
from patient.serializers import PatientsSerializer
# Create your views here.
class PatientList(generics.ListAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientsSerializer