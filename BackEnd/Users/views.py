# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from django.core.mail import send_mail
from django.contrib.auth import get_user_model
from .serializers import CustomUserSerializer, LoginSerializer, PasswordResetSerializer, PasswordResetConfirmSerializer ,RegisterSerializer
import random

User = get_user_model()

class RegisterView(APIView):
    permission_classes = (AllowAny,)
    
    def get(self, request):
        all_user = User.objects.all()
        serializer = RegisterSerializer(all_user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



    def post(self, request):
        data = request.data

        if 'password' not in data or 'password_repeat' not in data:
            return Response({'error':'password and password_repeat fields are required'},status=status.HTTP_400_BAD_REQUEST)
        
        if data['password'] != data['password_repeat']:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        data['password'] = make_password(data['password'])
        serializer = CustomUserSerializer(data=data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': CustomUserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': CustomUserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class PasswordResetView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            user = User.objects.get(email=email)
            temp_password = random.randint(100000, 999999)
            user.set_password(temp_password)
            user.save()
            send_mail(
                'Password Reset Request',
                f'Your temporary password is: {temp_password}',
                'your_email@example.com',
                [email],
                fail_silently=False,
            )
            return Response({'detail': 'Temporary password sent to email.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetConfirmView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            temp_password = serializer.validated_data['temp_password']
            new_password = serializer.validated_data['new_password']
            user = User.objects.get(email=email)
            if user.check_password(temp_password):
                user.set_password(new_password)
                user.save()
                return Response({'detail': 'Password has been reset.'}, status=status.HTTP_200_OK)
            return Response({'detail': 'Invalid temporary password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
