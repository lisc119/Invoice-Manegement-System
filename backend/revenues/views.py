from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from revenues.models import Revenue
from revenues.serializers import RevenueSerializer


# List all revenues: api/revenues/
class RevenueListAPIView(ListAPIView):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer


# Create a revenue: api/revenues/new/
class RevenueCreateAPIView(CreateAPIView):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Read-write-delete a revenue by id: api/revenues/<int:id>/
class RevenueRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer
    lookup_field = 'id'


# List revenues during the specific period: /api/revenues /<int:start_date>/<int:end_date>/
class RevenuePeriodListAPIView(ListAPIView):
    queryset = Revenue.objects.all()
    serializer_class = RevenueSerializer

    def get_queryset(self):
        start_date = self.kwargs.get('start_date')
        end_date = self.kwargs.get('end_date')
        return Revenue.objects.filter(date__range=(start_date, end_date)).order_by("-created")
