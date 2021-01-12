""" Post Forms """

# Django
from django import forms


# Models
from posts.models import Post


class PostForm(forms.ModelForm):
    """ Post Model Form """

    class Meta:
        """ Form Settings """

        model = Post
        fields = ('user', 'profile', 'title', 'photo')
