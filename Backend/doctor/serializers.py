from rest_framework import serializers
from doctor.models import Doctor
from patient.models import DoctorPatient
# from patient.serializers import PatientsSerializer


class DoctorPatientSerializer(serializers.ModelSerializer):
    patienName = serializers.CharField(source='patientId.userId.name', read_only=True)
    class Meta:
        model = DoctorPatient
        fields = ( 'patienName' )

class DoctorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='doctor.name',read_only=True )
    departmentIn = serializers.CharField(source='department.title',read_only=True )
    patients=DoctorPatientSerializer(many=True,read_only=True)
    class Meta:
        model = Doctor
        fields = (  'role' ,'BloodType' , 'image' , 'pk','name','departmentIn','doctor' , 'department','patients')


# class DoctorJoinSerializer(serializers.ModelSerializer):
#     patients = PatientDoctorSerializer(many=True, read_only=True)
#     nameone = serializers.CharField(source="doctorId.doctor.name",read_only=True)

#     class Meta:
#         model = Doctor
#         fields = ("nameone","patients","doctor")