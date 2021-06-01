from django.conf import settings
from django.db import models

from invoices.models import Invoice

from tags.models import Tag


class Article(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    item = models.CharField(max_length=50)
    quantity = models.FloatField(null=True, blank=True)
    price = models.FloatField(null=True, blank=True)
    tag = models.ForeignKey(to=Tag, verbose_name='tag', related_name='articles', on_delete=models.CASCADE, blank=True)
    invoice = models.ForeignKey(to=Invoice, verbose_name='invoice', related_name='articles', on_delete=models.CASCADE)

    def __str__(self):
        return f'Article {self.pk}: for {self.item}'
