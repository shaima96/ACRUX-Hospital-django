from djoser.serializers import UserCreateSerializer, UserSerializer
from doctor.serializers import DoctorSerializer
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'name', 'password')

class UserDetails(serializers.ModelSerializer):
    doctor=DoctorSerializer(read_only=True)
    class Meta:
        model = User
        fields = ('id', 'email', 'name', 'password',"doctor")
