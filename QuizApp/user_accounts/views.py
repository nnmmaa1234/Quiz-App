from django.shortcuts import render, redirect
from user_accounts.forms import LoginForm, UserRegisterationForm
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth import authenticate, login, logout

# Create your views here.
def register_view(request):
    if request.method == "POST":
        form = UserRegisterationForm(request.POST)
        
        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data['password'])
            new_user.save()
            
            return HttpResponseRedirect("/login/")
    else:
        form = UserRegisterationForm()
            
    return render(request,'user_accounts/registeration.html',{'form':form})

def login_view(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username = cd['username'], password = cd['password'])
            if user is not None:
                login(request,user)
                return HttpResponseRedirect("/welcome/")
            else:
                return HttpResponse("<h1>Invalid Login</h1>")
    else:
        form = LoginForm()
            
    return render(request,'user_accounts/login.html',{'form':form})

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/login/')
        
def goto_register_view(request):
    return render(request,'user_accounts/gotoregister.html')