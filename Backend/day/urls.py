from django.urls import path 
from day.views import DayList,HourList,DayDetail
app_name = 'day'

urlpatterns = [
    path('date' , DayList.as_view()),
    path('date/details' ,DayDetail),
    path('hour' , HourList.as_view())
]