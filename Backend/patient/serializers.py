from patient.models import Patient
from rest_framework import serializers

class PatientsSerializer(serializers.ModelSerializer):
    name=serializers.CharField(source="userId.name",read_only=True)
    class Meta:
        model=Patient
        fields=("image","BloodType","role","userId","name")

