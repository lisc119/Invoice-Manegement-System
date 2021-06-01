from django.urls import path
from restaurants.views import RestaurantListAPIView, RestaurantCreateAPIView, RestaurantListMeAPIView, \
    RestaurantRetrieveUpdateDestroyAPIView, SearchViews

urlpatterns = [
    path('', RestaurantListAPIView.as_view()),
    path('new/', RestaurantCreateAPIView.as_view()),
    path('me/', RestaurantListMeAPIView.as_view()),
    path('<int:id>/', RestaurantRetrieveUpdateDestroyAPIView.as_view()),
    path('search/', SearchViews.as_view()),
]
