from patient.models import Patient,DoctorPatient
from rest_framework import serializers

class PatientsDoctorsSerializer(serializers.ModelSerializer):
    doctorName = serializers.CharField(source='doctorId.doctor.name', read_only=True)
    # patientName = serializers.CharField(source='patientId.userId.name',read_only=True)
    class Meta:
        model=DoctorPatient
        fields= ['doctorName']

class PatientsSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source="userId.name",read_only=True)
    doctors = PatientsDoctorsSerializer(many=True, read_only=True)
    class Meta:
        model=Patient
        fields=("image","BloodType","role","userId","name",'doctors')


