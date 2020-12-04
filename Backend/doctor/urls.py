from django.urls import path 
from doctor.views import DoctorList,DoctorDetail,DoctorUpdate

app_name = 'doctor'

urlpatterns = [
    path('' , DoctorList.as_view()),
    path('details' , DoctorDetail),
    path('update',DoctorUpdate )
]