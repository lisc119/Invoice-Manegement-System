from django.urls import path
from revenues.views import RevenueListAPIView, RevenueCreateAPIView, RevenueRetrieveUpdateDestroyAPIView, \
    RevenuePeriodListAPIView

urlpatterns = [
    path('', RevenueListAPIView.as_view()),
    path('new/', RevenueCreateAPIView.as_view()),
    path('<int:id>/', RevenueRetrieveUpdateDestroyAPIView.as_view()),
    path('date/<str:start_date>/<str:end_date>/', RevenuePeriodListAPIView.as_view()),
]
