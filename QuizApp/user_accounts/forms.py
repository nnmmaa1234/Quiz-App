from django.contrib.auth.models import User
from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(max_length = 50)
    password = forms.CharField(max_length = 50, widget = forms.PasswordInput)
    
class UserRegisterationForm(forms.ModelForm):
    username    = forms.CharField(max_length = 50)
    email       = forms.EmailField()
    password    = forms.CharField(label = "Password", widget = forms.PasswordInput)
    password2   = forms.CharField(label = "Confirm Password", 
                                  widget = forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ("username","email")
        
    def cleaned_password2(self):
        cd = self.cleaned_data
        if cd['password'] != cd['password2']:
            raise forms.ValidationError("Passwords do not match!")
        return cd["password2"]