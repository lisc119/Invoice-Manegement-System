from django.urls import path
from invoices.views import InvoiceListAPIView, InvoiceCreateAPIView, InvoiceRetrieveUpdateDestroyAPIView, \
    InvoicePeriodListAPIView, InvoiceLatestListAPIView, InvoiceHighestListAPIView

urlpatterns = [
    path('', InvoiceListAPIView.as_view()),
    path('new/', InvoiceCreateAPIView.as_view()),
    path('<int:id>/', InvoiceRetrieveUpdateDestroyAPIView.as_view()),
    path('date/<str:start_date>/<str:end_date>/', InvoicePeriodListAPIView.as_view()),
    path('latest/<int:number>/', InvoiceLatestListAPIView.as_view()),
    path('highest/<int:number>/', InvoiceHighestListAPIView.as_view()),

]
