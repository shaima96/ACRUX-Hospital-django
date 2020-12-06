from django.urls import path 
from users.views import UserDetail
app_name = 'users'

urlpatterns = [
    path('' , UserDetail),
]