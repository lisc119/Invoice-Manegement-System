from django.conf import settings
from django.db import models


class Tag(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=50)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='tags', on_delete=models.CASCADE)
    color = models.CharField(max_length=7, default='#0000FF', blank=True)

    def __str__(self):
        return f'Tag {self.pk}: {self.title}'
