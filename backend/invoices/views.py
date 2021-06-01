from django.db.models import Sum
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from django.db.models import Func, F

from invoices.models import Invoice
from invoices.serializers import InvoiceSerializer


# List all invoices: api/invoices/
class InvoiceListAPIView(ListAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer


# Create a invoice: api/invoices/new/
class InvoiceCreateAPIView(CreateAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


# Read-write-delete a invoice by id: api/invoices/<int:id>/
class InvoiceRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer
    lookup_field = 'id'


# List invoices during the specific period: /api/invoices/<int:start_date>/<int:end_date>/
class InvoicePeriodListAPIView(ListAPIView):
    queryset = Invoice.objects.all()
    serializer_class = InvoiceSerializer

    def get_queryset(self):
        start_date = self.kwargs.get('start_date')
        end_date = self.kwargs.get('end_date')
        return Invoice.objects.filter(date__range=(start_date, end_date)).order_by("-created")


# List the latest invoices:
class InvoiceLatestListAPIView(ListAPIView):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()
    lookup_url_kwarg = 'number'

    def get_queryset(self):
        number = self.kwargs.get('number')
        latest_invoices = Invoice.objects.order_by('-date').all()[:number]
        return latest_invoices


# List the invoices with the highest amount:
class InvoiceHighestListAPIView(ListAPIView):
    serializer_class = InvoiceSerializer
    queryset = Invoice.objects.all()
    lookup_url_kwarg = 'number'

    def get_queryset(self):
        number = self.kwargs.get('number')
        highest_invoices = Invoice.objects.annotate(total=Sum(F('articles__price') * F('articles__quantity'))).order_by(
            '-total')[:number]
        return highest_invoices
