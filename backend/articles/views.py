from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from articles.models import Article
from articles.serializers import ArticleSerializer

# List all articles: api/articles/
from rest_framework.response import Response


class ArticleListAPIView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


# Create a article: api/articles/new/
class ArticleCreateAPIView(CreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # def post(self, request, *args, **kwargs):
    #     article = Article(item=request.data["item"],
    #                       quantity=request.data["quantity"],
    #                       price=request.data["price"],
    #                       tag_id=request.data["tag"],
    #                       invoice_id=request.data["invoice"])
    #     article.save()
    #     return Response(status=status.HTTP_200_OK)

    def perform_create(self, serializer):
        serializer.save()


# Read-write-delete a article by id: api/articles/<int:id>/
class ArticleRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = 'id'


# List the articles with tag id: api/articles/tag/<int:tag_id>/
class ArticleTagListAPIView(ListAPIView):
    serializer_class = ArticleSerializer
    lookup_url_kwarg = 'tag_id'

    def get_queryset(self):
        tag_id = self.kwargs.get('tag_id')
        return Article.objects.filter(tag__id=tag_id).order_by("-created")


# List articles during the specific period: /api/articles/date/<int:start_date>/<int:end_date>/
class ArticlePeriodListAPIView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get_queryset(self):
        start_date = self.kwargs.get('start_date')
        end_date = self.kwargs.get('end_date')
        return Article.objects.filter(invoice__date__range=(start_date, end_date)).order_by("-created")


# List articles during the specific period with tag id:
# /api/articles/date/<int:start_date>/<int:end_date>/tag/<int:tag_id>/
class ArticlePeriodTagListAPIView(ListAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_url_kwarg = 'tag_id'

    def get_queryset(self):
        tag_id = self.kwargs.get('tag_id')
        start_date = self.kwargs.get('start_date')
        end_date = self.kwargs.get('end_date')
        return Article.objects.filter(invoice__date__range=(start_date, end_date), tag__id=tag_id).order_by("-created")
