from django.urls import path
from quizapp import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'quizapp'
urlpatterns = [
    path('welcome/', views.welcome_view, name = 'welcome'),
    path('quiz/', views.quiz_view, name = 'quiz'),
    path('result/', views.result_view, name = 'result'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)