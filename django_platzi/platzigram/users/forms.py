""" User forms """

# Django
from django import forms

# Models
from django.contrib.auth.models import User
from users.models import Profile


class SignupForm(forms.Form):
    """ Sign Up Form """

    username = forms.CharField(label=False, min_length=4, max_length=50, widget=forms.TextInput(
        attrs={'placeholder': 'username', 'class': 'form-control', 'required': True}))
    password = forms.CharField(
        label=False, max_length=70, widget=forms.PasswordInput(attrs={'placeholder': 'password', 'class': 'form-control', 'required': True}))
    password_confirmation = forms.CharField(label=False,
                                            max_length=70, widget=forms.PasswordInput(attrs={'placeholder': 'password confirmation', 'class': 'form-control', 'required': True}))
    first_name = forms.CharField(label=False, min_length=2, max_length=50, widget=forms.TextInput(
        attrs={'placeholder': 'first name', 'class': 'form-control', 'required': True}))
    last_name = forms.CharField(label=False, min_length=2, max_length=50, widget=forms.TextInput(
        attrs={'placeholder': 'last name', 'class': 'form-control', 'required': True}))
    email = forms.CharField(label=False, min_length=6, max_length=70,
                            widget=forms.EmailInput(attrs={'placeholder': 'email', 'class': 'form-control', 'required': True}))

    def clean_username(self):
        """ Username must be uniqur """
        username = self.cleaned_data['username']
        username_taken = User.objects.filter(username=username).exists()
        if username_taken:
            raise forms.ValidationError("Username is already in use")
        return username

    def clean(self):
        """ Verify password confirmation match """
        data = super().clean()

        password = data["password"]
        password_confirmation = data["password_confirmation"]

        if password != password_confirmation:
            raise forms.ValidationError("Passwords do not match")

        return data

    def save(self):
        """ Create user and profile """
        data = self.cleaned_data
        data.pop("password_confirmation")

        user = User.objects.create_user(**data)
        profile = Profile(user=user)
        profile.save()


class ProfileForm(forms.Form):
    """ Profile Form """

    website = forms.URLField(max_length=200, required=True)
    biography = forms.CharField(max_length=500, required=False)
    phone_number = forms.CharField(max_length=20, required=False)
    picture = forms.ImageField()
