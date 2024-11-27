from django.db import models
from Users.models import CustomUser

class AnxietyQuestion(models.Model):
    text = models.TextField()
    choices = models.JSONField()  # لیست گزینه‌ها با امتیازات

class UserAnxietyResponse(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    question = models.ForeignKey(AnxietyQuestion, on_delete=models.CASCADE)
    response = models.CharField(max_length=100)

class UserAnxietyScore(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    score = models.IntegerField()
    category = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

class Style(models.Model):
    name = models.CharField(max_length=100)

class Question(models.Model):
    style = models.ForeignKey(Style, on_delete=models.CASCADE)
    text = models.TextField()

class UserResponse(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    response = models.CharField(max_length=100)

class PromptTemplate(models.Model):
    style = models.ForeignKey(Style, on_delete=models.CASCADE)
    template = models.TextField()

class UserPrompt(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    style = models.ForeignKey(Style, on_delete=models.CASCADE)
    prompt = models.TextField()
