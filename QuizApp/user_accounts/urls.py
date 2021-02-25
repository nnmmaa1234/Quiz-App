from django.urls import path
from user_accounts import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'user_accounts'

urlpatterns = [
    path('', views.goto_register_view, name = 'goto_register'),
    path('register/', views.register_view, name = 'register'),
    path('login/', views.login_view, name = 'login'),
    path('logout/', views.logout_view, name = 'logout'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)