from day.models import Day,Hour
from rest_framework import serializers


class HourSerializer(serializers.ModelSerializer):
    date = serializers.CharField(source='dayId.date', read_only=True )
    patientName = serializers.CharField(source='patientId.userId.name', read_only=True )
    doctorName = serializers.CharField(source='doctorId.doctor.name',read_only=True )
    class Meta:
        model = Hour
        fields = ('isAvailable' , 'date' ,'dayId' ,'hour','patientName' ,'doctorName' )


class DaySerializer(serializers.ModelSerializer):
    
    Hour = HourSerializer(many=True ,read_only=True)
    class Meta:
        model = Day
        fields = ('date' ,'Hour')
