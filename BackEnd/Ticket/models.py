
from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    banner_image = models.ImageField(upload_to='banner_images/', blank=True, null=True)

class Generation(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='generations')
    image = models.ImageField(upload_to='generations/')
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField(blank=True, null=True)

