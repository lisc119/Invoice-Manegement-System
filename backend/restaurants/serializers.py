from django.contrib.auth import get_user_model
from rest_framework import serializers

from restaurants.models import Restaurant
from users.serializers import SmallUserSerializer
from invoices.serializers import InvoiceSerializer
from revenues.serializers import RevenueSerializer

User = get_user_model()


class RestaurantSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)
    revenues = RevenueSerializer(required=False, read_only=True, many=True)
    invoices = InvoiceSerializer(required=False, read_only=True, many=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'author', 'created', 'updated', 'name', 'country', 'street', 'city', 'zip', 'website', 'phone',
                  'email', 'image', 'revenues', 'invoices']
        read_only_fields = ['author']


class SmallRestaurantSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)

    class Meta:
        model = Restaurant
        fields = ['id', 'author', 'created', 'updated', 'name', 'country', 'street', 'city', 'zip', 'website', 'phone',
                  'email', 'image']
        read_only_fields = ['author']
