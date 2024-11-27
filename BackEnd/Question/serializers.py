from rest_framework import serializers
from .models import AnxietyQuestion, UserAnxietyResponse, UserResponse, Style, Question, PromptTemplate, UserPrompt

# class StyleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Style
#         fields = '__all__'

# class QuestionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Question
#         fields = '__all__'

# class UserResponseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserResponse
#         fields = '__all__'

# class PromptTemplateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PromptTemplate
#         fields = '__all__'



class AnxietyQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnxietyQuestion
        fields = '__all__'

class UserAnxietyResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAnxietyResponse
        fields = '__all__'

class UserResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserResponse
        fields = '__all__'

class StyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Style
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

