""" User Models """

# Django
from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Profile(models.Model):
    """ Profile Model

    Proxy model that extends the base data with other information
    """
    # Fields

    # Relation One to One
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    website = models.URLField(max_length=200, blank=True)
    biography = models.TextField(blank=True)
    phone_number = models.CharField(max_length=20, blank=True)

    picture = models.ImageField(
        upload_to="users/pictures", blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True)

    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """ Return Username """
        return self.user.username
