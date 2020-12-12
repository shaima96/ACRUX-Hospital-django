from django.urls import path 
from day.views import DayList,HourList
app_name = 'day'

urlpatterns = [
    path('date' , DayList.as_view()),
    path('hour' , HourList.as_view())
]