from django.urls import path
from .views import (
    UserProfileView,
    GeneratedImageListView,
    GeneratedImageUploadView,
    FollowRequestView,
    AcceptFollowRequestView,
    RejectFollowRequestView,
    FollowView,
    UnfollowView,
    FavoriteUserView,
)

urlpatterns = [
    # --- پروفایل کاربر ---
    path('profile/', UserProfileView.as_view(), name='user-profile'),

    # --- تصاویر تولیدی ---
    path('generated-images/', GeneratedImageListView.as_view(), name='generated-images-list'),
    path('generated-images/upload/', GeneratedImageUploadView.as_view(), name='upload-generated-image'),

    # --- مدیریت فالو ---
    path('follow/requests/', FollowRequestView.as_view(), name='follow-requests'),
    path('follow/request/accept/<int:follow_request_id>/', AcceptFollowRequestView.as_view(), name='accept-follow-request'),
    path('follow/request/reject/<int:follow_request_id>/', RejectFollowRequestView.as_view(), name='reject-follow-request'),
    path('follow/<int:user_id>/', FollowView.as_view(), name='follow-user'),
    path('unfollow/<int:user_id>/', UnfollowView.as_view(), name='unfollow-user'),

    # --- مدیریت کاربران مورد علاقه ---
    path('favorites/<int:user_id>/', FavoriteUserView.as_view(), name='manage-favorite-user'),
]
