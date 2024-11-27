from django.urls import path
from .views import GetAnxietyQuestions, SubmitAnxietyResponses, GetStyles, GetQuestions, SubmitResponse

urlpatterns = [
    path('anxiety-questions/', GetAnxietyQuestions.as_view(), name='get_anxiety_questions'),
    path('submit-anxiety-responses/', SubmitAnxietyResponses.as_view(), name='submit_anxiety_responses'),
    path('styles/', GetStyles.as_view(), name='get_styles'),
    path('styles/<int:style_id>/questions/', GetQuestions.as_view(), name='get_questions'),
    path('submit-response/', SubmitResponse.as_view(), name='submit_response'),
]
