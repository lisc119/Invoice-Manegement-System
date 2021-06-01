from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.db.models import Sum

from users.serializers import SmallUserSerializer
from articles.serializers import ArticleSerializer
from invoices.models import Invoice

User = get_user_model()


class InvoiceSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)
    articles = ArticleSerializer(required=False, read_only=True, many=True)
    number_of_articles = serializers.SerializerMethodField()
    total_amount = serializers.SerializerMethodField('get_total_amount')

    def get_number_of_articles(self, obj):
        return obj.articles.all().count()

    def get_total_amount(self, obj):
        total_amount = 0
        for article in obj.articles.all():
            total_amount += article.price * article.quantity
        return total_amount

    class Meta:
        model = Invoice
        fields = ['id', 'created', 'updated', 'date', 'shop', 'restaurant', 'author', 'articles', 'number_of_articles',
                  'total_amount']
        read_only_fields = ['author']
