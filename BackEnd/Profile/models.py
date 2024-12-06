from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy as _
from PIL import Image
import os


# User Profile Model
class UserProfile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True, null=True)
    country = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100, blank=True, null=True)
    profile_picture = models.ImageField(upload_to="profiles/", blank=True, null=True)
    banner_picture = models.ImageField(upload_to="banners/", blank=True, null=True)
    is_public = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.profile_picture:
            self.resize_image(self.profile_picture.path, (200, 200))
        if self.banner_picture:
            self.resize_image(self.banner_picture.path, (1440, 400))

    @staticmethod
    def resize_image(image_path, size):
        img = Image.open(image_path)
        img = img.resize(size, Image.ANTIALIAS)
        img.save(image_path)

    def __str__(self):
        return f"{self.user.username}'s Profile"

# Generated Image Model
class GeneratedImage(models.Model):
    CATEGORY_CHOICES = [
        ('human', _('Human')),
        ('animal', _('Animal')),
        ('decoration', _('Decoration')),
        ('mandala', _('Mandala')),
    ]

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="generated_images")
    image = models.ImageField(upload_to="generated_images/")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    likes = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="liked_images", blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image by {self.user.username} in {self.category} category"

# Follow Relationship
class Follow(models.Model):
    follower = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="following")
    following = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="followers")
    is_accepted = models.BooleanField(default=False)  # For private accounts

    class Meta:
        unique_together = ('follower', 'following')

    def __str__(self):
        return f"{self.follower.username} -> {self.following.username} ({'Accepted' if self.is_accepted else 'Pending'})"

# Favorite Users
class FavoriteUser(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="favorite_users")
    favorite = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="favorited_by")

    class Meta:
        unique_together = ('user', 'favorite')

    def __str__(self):
        return f"{self.user.username} favorited {self.favorite.username}"
