from django.urls import path 
from department.views import DepartmentList
app_name = 'department'

urlpatterns = [
    path('' , DepartmentList.as_view())
]