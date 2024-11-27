from django.contrib import admin
from .models import Style, Question, PromptTemplate

admin.site.register(Style)
admin.site.register(Question)
admin.site.register(PromptTemplate)
