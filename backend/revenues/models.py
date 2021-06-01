from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models

from restaurants.models import Restaurant

User = get_user_model()


class Revenue(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    date = models.DateField(null=True)
    revenue = models.IntegerField(null=True, blank=True)
    restaurant = models.ForeignKey(to=Restaurant, verbose_name='restaurant', related_name='revenues',
                                   on_delete=models.CASCADE)
    author = models.ForeignKey(to=User, related_name='revenues', on_delete=models.CASCADE)

    def __str__(self):
        return f'Revenue {self.pk}: {self.revenue} on {self.date}'
