from django.shortcuts import render

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserProfileSerializer, GenerationSerializer
from .models import CustomUser

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, username=None):
        if username:  # پروفایل کاربر دیگر
            user = CustomUser.objects.get(username=username)
        else:  # پروفایل خود کاربر
            user = request.user
        
        user_serializer = UserProfileSerializer(user)
        generations = user.generations.all()
        generation_serializer = GenerationSerializer(generations, many=True)
        
        return Response({
            'user_profile': user_serializer.data,
            'generations': generation_serializer.data
        }, status=status.HTTP_200_OK)

    def put(self, request):
        user = request.user
        serializer = UserProfileSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
