from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

sexes = {
    "M": "Male",
    "F": "Female"
}


class UserManager(BaseUserManager):
    def create_user(self, username, password=None, dietary_preferences=None,
                    allergens=None, height=None, weight=None, sex=None):

        if None in [username, password, dietary_preferences, allergens, height, weight, sex]:
            raise ValueError('All values must be set')

        user = self.model(
            username=username,
            dietary_preferences=dietary_preferences,
            allergens=allergens,
            height=height,
            weight=weight,
            sex=sex
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if not extra_fields.get('is_superuser'):
            raise ValueError('is_superuser must be True')

        return self.create_user(username, password, **extra_fields)


class User(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20, unique=True)
    dietary_preferences = models.CharField(max_length=200)
    allergens = models.CharField(max_length=200)
    height = models.FloatField()
    weight = models.FloatField()
    sex = models.CharField(choices=sexes, max_length=20)

    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['dietary_preferences', 'allergens', 'height', 'weight', 'sex']

    objects = UserManager()

    def __str__(self):
        return f"{self.username}"
