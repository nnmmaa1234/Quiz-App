from django.shortcuts import render
from .models import score

# Create your views here.
def welcome_view(request):
    return render(request, 'quizapp/welcome.html')

def quiz_view(request):
    # if request.method == 'POST':
    #     marks = request.POST.get('score', None)
        
    #     score.objects.filter(participant=request.user).create(
    #         marks=marks 
    #     )
    # else:
    #     context = {}
    #     return render(request, 'quizapp/quiz.html', context)
    return render(request, 'quizapp/quiz.html')

def result_view(request):
    return render(request, 'quizapp/results.html')