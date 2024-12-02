# # serializers.py
# from rest_framework import serializers
# from django.contrib.auth import get_user_model, authenticate
# from django.utils.translation import gettext_lazy as _

# User = get_user_model()

# class CustomUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'first_name', 'last_name', 'email', 'phone_number', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create(
#             username=validated_data['username'],
#             first_name=validated_data['first_name'],
#             last_name=validated_data['last_name'],
#             email=validated_data['email'],
#             phone_number=validated_data['phone_number'],
#         )
#         user.set_password(validated_data['password'])
#         user.save()
#         return user

# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)

#     def validate(self, data):
#         username = data.get('username')
#         password = data.get('password')

#         if username and password:
#             user = authenticate(request=self.context.get('request'), username=username, password=password)
#             if not user:
#                 msg = _('Unable to log in with provided credentials.')
#                 raise serializers.ValidationError(msg, code='authorization')
#         else:
#             msg = _('Must include "username" and "password".')
#             raise serializers.ValidationError(msg, code='authorization')

#         data['user'] = user
#         return data

# class PasswordResetSerializer(serializers.Serializer):
#     email = serializers.EmailField()

# class PasswordResetConfirmSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     temp_password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)
#     new_password = serializers.CharField(style={'input_type': 'password'}, trim_whitespace=False)



# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = '__all__'

from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.mail import send_mail


User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'phone_number', 'role', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            phone_number=validated_data.get('phone_number'),
            role=validated_data['role'],
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        if not username and not email:
            raise serializers.ValidationError("Either username or email is required.")

        user = authenticate(username=username, password=password) or authenticate(email=email, password=password)
        if not user:
            raise serializers.ValidationError("Invalid credentials.")

        return {'user': user}

class TokenSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()



class PasswordResetSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError("No user is associated with this email address.")
        return value

    def save(self):
        email = self.validated_data['email']
        user = User.objects.get(email=email)
        # تولید کد موقتی
        temp_password = User.objects.make_random_password()
        user.set_password(temp_password)
        user.save()

        # ارسال ایمیل
        send_mail(
            subject="Password Reset Request",
            message=f"Your temporary password is: {temp_password}",
            from_email="your_email@example.com",
            recipient_list=[email],
        )

class PasswordResetConfirmSerializer(serializers.Serializer):
    email = serializers.EmailField()
    temp_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data['email']
        temp_password = data['temp_password']

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email address.")

        if not user.check_password(temp_password):
            raise serializers.ValidationError("Temporary password is incorrect.")

        return data

    def save(self):
        email = self.validated_data['email']
        new_password = self.validated_data['new_password']
        user = User.objects.get(email=email)
        user.set_password(new_password)
        user.save()