from rest_framework import serializers
from doctor.models import Doctor


class DoctorSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='doctor.name',read_only=True )
    departmentIn = serializers.CharField(source='department.title',read_only=True )
    class Meta:
        model = Doctor
        fields = (  'role' ,'BloodType' , 'image' , 'pk','name','departmentIn','doctor' , 'department')