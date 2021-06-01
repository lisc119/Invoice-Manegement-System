from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from django.conf.urls.static import static
from django.conf import settings

api_patterns = [
    path('auth/', include(authurls)),
    path('users/', include('users.urls')),
    path('restaurants/', include('restaurants.urls')),
    path('revenues/', include('revenues.urls')),
    path('invoices/', include('invoices.urls')),
    path('articles/', include('articles.urls')),
    path('tags/', include('tags.urls')),
    # path('docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),

]

urlpatterns = [
    path('backend/api/', include(api_patterns)),
    path('backend/api/admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
