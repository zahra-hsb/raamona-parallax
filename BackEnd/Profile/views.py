# views.py
from rest_framework.views import APIView
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from .models import UserProfile, GeneratedImage, Follow, FavoriteUser
from .serializers import (
    UserProfileSerializer, 
    GeneratedImageSerializer, 
    GeneratedImageUploadSerializer,
    FollowSerializer,
    FollowRequestSerializer,
    FavoriteUserSerializer
)
from django.contrib.auth import get_user_model

User = get_user_model()

# --- پروفایل کاربر ---
class UserProfileView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer

    def get_object(self):
        return self.request.user.userprofile

    def patch(self, request, *args, **kwargs):
        profile = self.get_object()
        serializer = self.get_serializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# --- مدیریت تصاویر تولیدی ---
class GeneratedImageListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = GeneratedImageSerializer

    def get_queryset(self):
        filters = {}
        category = self.request.query_params.get('category')
        sort_by = self.request.query_params.get('sort_by', 'created_at')

        if category:
            filters['category'] = category
        if sort_by == 'likes':
            return GeneratedImage.objects.filter(**filters).order_by('-likes_count')
        return GeneratedImage.objects.filter(**filters).order_by('-created_at')

class GeneratedImageUploadView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = GeneratedImageUploadSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# --- مدیریت فالو و درخواست‌ها ---
class FollowRequestView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = FollowRequestSerializer

    def get_queryset(self):
        return Follow.objects.filter(following=self.request.user, is_accepted=False)

class AcceptFollowRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, follow_request_id):
        try:
            follow_request = Follow.objects.get(id=follow_request_id, following=request.user, is_accepted=False)
            follow_request.is_accepted = True
            follow_request.save()
            return Response({'detail': 'Follow request accepted.'}, status=status.HTTP_200_OK)
        except Follow.DoesNotExist:
            return Response({'error': 'Follow request not found.'}, status=status.HTTP_404_NOT_FOUND)

class RejectFollowRequestView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, follow_request_id):
        try:
            follow_request = Follow.objects.get(id=follow_request_id, following=request.user, is_accepted=False)
            follow_request.delete()
            return Response({'detail': 'Follow request rejected.'}, status=status.HTTP_200_OK)
        except Follow.DoesNotExist:
            return Response({'error': 'Follow request not found.'}, status=status.HTTP_404_NOT_FOUND)

class FollowView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            target_user = User.objects.get(id=user_id)
            if target_user.userprofile.is_public:
                Follow.objects.create(follower=request.user, following=target_user, is_accepted=True)
                return Response({'detail': 'User followed successfully.'}, status=status.HTTP_200_OK)
            else:
                Follow.objects.create(follower=request.user, following=target_user)
                return Response({'detail': 'Follow request sent.'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

class UnfollowView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            follow = Follow.objects.get(follower=request.user, following__id=user_id)
            follow.delete()
            return Response({'detail': 'User unfollowed successfully.'}, status=status.HTTP_200_OK)
        except Follow.DoesNotExist:
            return Response({'error': 'Follow relationship not found.'}, status=status.HTTP_404_NOT_FOUND)

# --- مدیریت کاربران مورد علاقه ---
class FavoriteUserView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, user_id):
        try:
            favorite_user = User.objects.get(id=user_id)
            FavoriteUser.objects.get_or_create(user=request.user, favorite=favorite_user)
            return Response({'detail': 'User added to favorites.'}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, user_id):
        try:
            favorite = FavoriteUser.objects.get(user=request.user, favorite__id=user_id)
            favorite.delete()
            return Response({'detail': 'User removed from favorites.'}, status=status.HTTP_200_OK)
        except FavoriteUser.DoesNotExist:
            return Response({'error': 'Favorite user not found.'}, status=status.HTTP_404_NOT_FOUND)
