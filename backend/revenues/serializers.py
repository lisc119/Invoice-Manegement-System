from django.contrib.auth import get_user_model
from rest_framework import serializers

from users.serializers import SmallUserSerializer
from revenues.models import Revenue

User = get_user_model()


class RevenueSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)

    class Meta:
        model = Revenue
        fields = '__all__'
        read_only_fields = ['author']
