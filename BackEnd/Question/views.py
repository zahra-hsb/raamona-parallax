# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import Style, Question, UserResponse, UserPrompt, PromptTemplate
# from .serializers import StyleSerializer, QuestionSerializer, UserResponseSerializer
# # import openai

# class GetStyles(APIView):
#     def get(self, request):
#         styles = Style.objects.all()
#         serializer = StyleSerializer(styles, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

# class GetQuestions(APIView):
#     def get(self, request, style_id):
#         questions = Question.objects.filter(style_id=style_id)
#         serializer = QuestionSerializer(questions, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

# class SubmitResponse(APIView):
#     def post(self, request):
#         serializer = UserResponseSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             user_id = request.data.get('user_id')
#             style_id = request.data.get('style_id')
#             prompt = self.create_prompt(user_id, style_id)
#             image_url = self.generate_image(prompt)
#             return Response({'image_url': image_url}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     def create_prompt(self, user_id, style_id):
#         responses = UserResponse.objects.filter(user_id=user_id, question__style_id=style_id)
#         style = Style.objects.get(id=style_id)
#         prompt_template = self.get_prompt_template(style)
#         prompt = prompt_template.template
#         for response in responses:
#             keyword_placeholder = f"{response.question.id} keyword"
#             prompt = prompt.replace(keyword_placeholder, response.response)
#         UserPrompt.objects.create(user_id=user_id, style_id=style_id, prompt=prompt)
#         return prompt

#     def get_prompt_template(self, style):
#         template = PromptTemplate.objects.get(style=style)
#         return template

#     # def generate_image(self, prompt):
#     #     openai.api_key = 'YOUR_DALL_E_API_KEY'
#     #     response = openai.Image.create(prompt=prompt, n=1, size="1024x1024")
#     #     return response['data'][0]['url']



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import AnxietyQuestion, UserAnxietyResponse, UserAnxietyScore, UserResponse, Style, Question, PromptTemplate, UserPrompt
from .serializers import AnxietyQuestionSerializer, UserAnxietyResponseSerializer, UserResponseSerializer, StyleSerializer, QuestionSerializer
# import openai

class GetAnxietyQuestions(APIView):
    def get(self, request):
        questions = AnxietyQuestion.objects.all()
        serializer = AnxietyQuestionSerializer(questions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SubmitAnxietyResponses(APIView):
    def post(self, request):
        user = request.user
        responses = request.data.get('responses', [])

        total_score = 0

        for response_data in responses:
            question_id = response_data.get('question_id')
            answer = response_data.get('response')
            question = AnxietyQuestion.objects.get(id=question_id)
            
            # Calculate score based on the chosen answer
            score = question.choices.get(answer)
            total_score += score

            UserAnxietyResponse.objects.create(
                user=user,
                question=question,
                response=answer
            )
        
        # Determine the anxiety category
        if total_score <= 17:
            category = "Mild Anxiety"
        elif 18 <= total_score <= 24:
            category = "Mild to Moderate Anxiety"
        elif 25 <= total_score <= 30:
            category = "Moderate to Severe Anxiety"
        else:
            category = "Severe Anxiety"
        
        UserAnxietyScore.objects.create(user=user, score=total_score, category=category)

        return Response({'score': total_score, 'category': category}, status=status.HTTP_200_OK)

class GetStyles(APIView):
    def get(self, request):
        styles = Style.objects.all()
        serializer = StyleSerializer(styles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class GetQuestions(APIView):
    def get(self, request, style_id):
        questions = Question.objects.filter(style_id=style_id)
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class SubmitResponse(APIView):
    def post(self, request):
        serializer = UserResponseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user_id = request.data.get('user_id')
            style_id = request.data.get('style_id')
            user = request.user
            anxiety_score_obj = UserAnxietyScore.objects.filter(user=user).latest('created_at')
            anxiety_score = anxiety_score_obj.score
            anxiety_category = anxiety_score_obj.category
            prompt = self.create_prompt(user_id, style_id, anxiety_score, anxiety_category)
            image_url = self.generate_image(prompt)
            return Response({'image_url': image_url}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def create_prompt(self, user_id, style_id, anxiety_score, anxiety_category):
        user_responses = UserResponse.objects.filter(user_id=user_id, question__style_id=style_id)
        template = PromptTemplate.objects.get(style_id=style_id).template

        for response in user_responses:
            question_num = response.question.id
            placeholder = f'{question_num} keyword'
            template = template.replace(placeholder, response.response)

        template = template + f" The user's anxiety score is {anxiety_score}, indicating {anxiety_category}."

        UserPrompt.objects.create(
            user_id=user_id,
            style_id=style_id,
            prompt=template
        )

        return template

    # def generate_image(self, prompt):
    #     openai.api_key = "YOUR_OPENAI_API_KEY"
    #     response = openai.Image.create(
    #         prompt=prompt,
    #         n=1,
    #         size="1024x1024"
    #     )
    #     image_url = response['data'][0]['url']
    #     return image_url