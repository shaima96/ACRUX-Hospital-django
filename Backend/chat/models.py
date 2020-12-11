from django.db import models

# Create your models here.

class Chat(models.Model):
    name=models.CharField(max_length=250)
    message=models.CharField(max_length=500)

    def __str__(self):
        return self.name