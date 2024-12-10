from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model

User = get_user_model()

class EmailOrUsernameBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        if username is None or password is None:
            return None

        # بررسی ایمیل یا یوزرنیم
        user = None
        if self.is_email(username):
            try:
                user = User.objects.get(email=username)
            except User.DoesNotExist:
                return None
        else:
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return None

        # بررسی رمز عبور
        if user and user.check_password(password):
            return user
        return None

    def is_email(self, value):
        """بررسی می‌کند که آیا مقدار ورودی یک ایمیل معتبر است."""
        from django.core.validators import validate_email
        from django.core.exceptions import ValidationError

        try:
            validate_email(value)
            return True
        except ValidationError:
            return False
