
from django.contrib import admin
from django.urls import path, include
from Users.views import RegisterView, LoginView, LogoutView, PasswordResetView, PasswordResetConfirmView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/password-reset/', PasswordResetView.as_view(), name='auth_password_reset'),
    path('auth/password-reset-confirm/', PasswordResetConfirmView.as_view(), name='auth_password_reset_confirm'),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/social/', include('allauth.urls')),
]
