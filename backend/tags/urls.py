from django.urls import path
from tags.views import TagListAPIView, TagCreateAPIView, TagRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('', TagListAPIView.as_view()),
    path('new/', TagCreateAPIView.as_view()),
    path('<int:id>/', TagRetrieveUpdateDestroyAPIView.as_view()),
]
