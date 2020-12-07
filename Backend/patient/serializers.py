from patient.models import Patient,DoctorPatient
from rest_framework import serializers



class PatientDoctorSerializer(serializers.ModelSerializer):
    doctorname = serializers.CharField(source='doctorId.doctor.name', read_only=True)
    class Meta:
        model = DoctorPatient
        fields = ( 'patientId','doctorId' ,'doctorname')

class PatientsSerializer(serializers.ModelSerializer):
    name=serializers.CharField(source="userId.name",read_only=True)#BASE serializer
    doctors= PatientDoctorSerializer(many=True,read_only=True)
    class Meta:
        model=Patient
        fields=("image","BloodType","role","userId","name",'doctors')

# class PatientsJoinSerializer(serializers.ModelSerializer):
#     doctors = DoctorPatientSerializer(many=True,read_only=True)
#     nameone = serializers.CharField(source="userId.name",read_only=True)

#     class Meta:
#         model = Patient
#         fields = ("doctors","nameone","userId")

