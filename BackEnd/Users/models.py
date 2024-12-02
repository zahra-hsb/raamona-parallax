from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)
    ROLE_CHOICES = [
        ('psychologist', 'Psychologist'),
        ('patient', 'Patient'),
        ('artist', 'Artist'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='patient')

    def __str__(self):
        return self.username
