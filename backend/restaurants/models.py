from django.conf import settings
from django.db import models


def restaurant_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Restaurant(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=100, blank=True)
    street = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    zip = models.CharField(max_length=10)
    website = models.CharField(verbose_name='website', max_length=150, blank=True, null=True)
    phone = models.CharField(max_length=50)
    email = models.EmailField(unique=True, blank=True)
    image = models.ImageField(blank=True, null=True, upload_to='restaurant_directory_path')
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='restaurants', on_delete=models.CASCADE)

    def __str__(self):
        return f'Restaurant {self.pk}: {self.name}'
