from rest_framework import serializers
from .models import CustomUser, Generation

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'username', 'first_name', 'last_name', 'email', 'country', 
            'city', 'birth_date', 'bio', 'profile_image', 'banner_image'
        ]
        read_only_fields = ['username', 'email']  # این فیلدها را فقط قابل مشاهده می‌کنیم و امکان ویرایش آنها وجود ندارد

class GenerationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Generation
        fields = ['image', 'description', 'created_at']
