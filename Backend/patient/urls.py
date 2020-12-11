from django.urls import path 
from patient.views import PatientList,PateintDetails

app_name = 'patient'

urlpatterns = [
    path('' ,PatientList.as_view()),
    path("details/",PateintDetails)
]