from django.conf import settings
from django.db import models

from restaurants.models import Restaurant


class Invoice(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    date = models.DateField(null=True)
    shop = models.CharField(max_length=50)
    restaurant = models.ForeignKey(to=Restaurant, verbose_name='restaurant', related_name='invoices',
                                   on_delete=models.CASCADE)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, verbose_name='user', related_name='invoices',
                               on_delete=models.CASCADE)

    def __str__(self):
        return f'Invoice {self.pk}: from {self.shop} on {self.date}'
