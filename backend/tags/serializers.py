from django.contrib.auth import get_user_model
from rest_framework import serializers

from tags.models import Tag

User = get_user_model()


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'title', 'color']
