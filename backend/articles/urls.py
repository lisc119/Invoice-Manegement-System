from django.urls import path
from articles.views import ArticleListAPIView, ArticleCreateAPIView, ArticleRetrieveUpdateDestroyAPIView, \
    ArticleTagListAPIView, ArticlePeriodListAPIView, ArticlePeriodTagListAPIView

urlpatterns = [
    path('', ArticleListAPIView.as_view()),
    path('new/', ArticleCreateAPIView.as_view()),
    path('<int:id>/', ArticleRetrieveUpdateDestroyAPIView.as_view()),
    path('tag/<int:tag_id>/', ArticleTagListAPIView.as_view()),
    path('date/<str:start_date>/<str:end_date>/', ArticlePeriodListAPIView.as_view()),
    path('date/<str:start_date>/<str:end_date>/tag/<int:tag_id>/', ArticlePeriodTagListAPIView.as_view()),
]
