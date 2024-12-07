
from django.contrib import admin
from django.urls import path, include
from Users.views import RegisterView, UserListView, LoginView, LogoutView, PasswordResetView, PasswordResetConfirmView ,RegisterView, LoginView, LogoutView, GoogleLogin
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('auth/register/', RegisterView.as_view(), name='auth_register'),
    # path('auth/login/', LoginView.as_view(), name='auth_login'),
    # path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    # path('auth/password-reset/', PasswordResetView.as_view(), name='auth_password_reset'),
    # path('auth/password-reset-confirm/', PasswordResetConfirmView.as_view(), name='auth_password_reset_confirm'),
    # path('auth/', include('dj_rest_auth.urls')),
    # path('auth/social/', include('allauth.urls')),
    # path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('users/', UserListView.as_view(), name='user-list'),  
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/google/', GoogleLogin.as_view(), name='google_login'),
    path('auth/', include('allauth.urls')),
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset-confirm/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

]
