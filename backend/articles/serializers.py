from django.contrib.auth import get_user_model
from rest_framework import serializers

from articles.models import Article
from users.serializers import SmallUserSerializer

from tags.serializers import TagSerializer

User = get_user_model()


class ArticleSerializer(serializers.ModelSerializer):
    author = SmallUserSerializer(required=False, read_only=True)
    total_price = serializers.SerializerMethodField()
    date = serializers.SerializerMethodField()
    tag = TagSerializer(read_only=True)

    def get_total_price(self, obj):
        return obj.quantity * obj.price

    def get_date(self, obj):
        return obj.invoice.date

    class Meta:
        model = Article
        fields = ['id', 'created', 'updated', 'item', 'quantity', 'price', 'tag', 'invoice', 'author', 'date',
                  'total_price']
        read_only_fields = ['author']

    def create(self, validated_data):
        tag_id = self.initial_data['tag']
        return Article.objects.create(**validated_data, tag_id=tag_id)
