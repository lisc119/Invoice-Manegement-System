from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from restaurants.serializers import RestaurantSerializer, SmallRestaurantSerializer
from restaurants.models import Restaurant
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from articles.models import Article
from articles.serializers import ArticleSerializer
from invoices.models import Invoice
from invoices.serializers import InvoiceSerializer

from django.db.models import Q


# List all restaurants: api/restaurants/
class RestaurantListAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = SmallRestaurantSerializer


# Create a restaurant: api/restaurants/new/
class RestaurantCreateAPIView(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = SmallRestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# List all restaurants created by me: api/restaurants/me/
class RestaurantListMeAPIView(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = SmallRestaurantSerializer

    def get_queryset(self):
        restaurants = Restaurant.objects.filter(author=self.request.user)
        return restaurants


# Read-write-delete a restaurant by id: api/restaurants/<int:id>/
class RestaurantRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = 'id'


class SearchViews(GenericAPIView):
    def post(self, *args, **kwargs):
        search_string = self.request.query_params.get('search')

        return Response(InvoiceSerializer(
            Invoice.objects.filter(Q(shop__icontains=search_string) | Q(articles__item__icontains=search_string)),
            many=True).data)

# class SearchViews(GenericAPIView):
#     def post(self, *args, **kwargs):
#         type = self.request.data.get('type').lower()
#         search_string = self.request.query_params.get('search')
#
#         if type == 'invoice':
#             return Response(InvoiceSerializer(Invoice.objects.filter(shop__icontains=search_string),many=True).data)
#         if type == 'article':
#             return Response(ArticleSerializer(Article.objects.filter(item__icontains=search_string), many=True).data)
#         else:
#             return Response('Nothing')
