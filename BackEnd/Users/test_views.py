from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()

class UserAPITestCase(APITestCase):
    def setUp(self):
        # ایجاد کاربر پیش‌فرض برای تست‌ها
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpassword',
            phone_number='1234567890'
        )
        self.register_url = '/auth/register/'
        self.login_url = '/auth/login/'
        self.logout_url = '/auth/logout/'
        self.password_reset_url = '/auth/password-reset/'
        self.password_reset_confirm_url = '/auth/password-reset-confirm/'
        self.refresh_token_url = '/auth/token/refresh/'

    def test_register_user(self):
        """تست ثبت‌نام کاربر جدید"""
        data = {
            'username': 'newuser',
            'email': 'newuser@example.com',
            'password': 'newpassword123',
            'password_repeat': 'newpassword123',
            'phone_number': '9876543210'
        }
        response = self.client.post(self.register_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_login_user(self):
        """تست ورود کاربر"""
        data = {
            'email': 'testuser@example.com',
            'password': 'testpassword',
        }
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('refresh', response.data)
        self.assertIn('access', response.data)

    def test_invalid_login(self):
        """تست ورود ناموفق"""
        data = {
            'email': 'wronguser@example.com',
            'password': 'wrongpassword',
        }
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertIn('error', response.data)

    def test_logout_user(self):
        """تست خروج کاربر"""
        refresh = RefreshToken.for_user(self.user)
        data = {'refresh': str(refresh)}
        self.client.force_authenticate(user=self.user)
        response = self.client.post(self.logout_url, data)
        self.assertEqual(response.status_code, status.HTTP_205_RESET_CONTENT)

    def test_password_reset(self):
        """تست درخواست ریست رمز عبور"""
        data = {'email': 'testuser@example.com'}
        response = self.client.post(self.password_reset_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('detail', response.data)

    def test_password_reset_confirm(self):
        """تست تأیید ریست رمز عبور"""
        temp_password = User.objects.make_random_password()
        self.user.set_password(temp_password)
        self.user.save()

        data = {
            'email': 'testuser@example.com',
            'temp_password': temp_password,
            'new_password': 'newpassword123',
        }
        response = self.client.post(self.password_reset_confirm_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('detail', response.data)

    def test_refresh_token(self):
        """تست تولید توکن جدید با استفاده از رفرش توکن"""
        refresh = RefreshToken.for_user(self.user)
        data = {'refresh': str(refresh)}
        response = self.client.post(self.refresh_token_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)
