from rest_framework import serializers
from .models import UserProfile, GeneratedImage, Follow, FavoriteUser
from django.contrib.auth import get_user_model

User = get_user_model()

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'bio', 'country', 'city', 
            'profile_picture', 'banner_picture', 'is_public'
        ]
        extra_kwargs = {
            'profile_picture': {'required': False},
            'banner_picture': {'required': False},
        }

class GeneratedImageSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()
    is_liked_by_user = serializers.SerializerMethodField()

    class Meta:
        model = GeneratedImage
        fields = ['id', 'image', 'category', 'likes_count', 'is_liked_by_user', 'created_at']

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_is_liked_by_user(self, obj):
        user = self.context.get('request').user
        return user in obj.likes.all()

class GeneratedImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneratedImage
        fields = ['image', 'category']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['follower', 'following', 'is_accepted']
        read_only_fields = ['follower', 'is_accepted']

class FollowRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ['id', 'follower', 'following', 'is_accepted']
        read_only_fields = ['follower', 'following']

class FavoriteUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavoriteUser
        fields = ['user', 'favorite']
        read_only_fields = ['user']
