from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from app.registration.views import RegistrationView, RegistrationValidationView, PasswordResetView, \
    PasswordResetValidationView

app_name = 'registration'

urlpatterns = [
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('registration/validate/', RegistrationValidationView.as_view(), name='registration-validation'),
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='retrieve-token-and-user'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='verify-token'),
    path('password-reset/', PasswordResetView.as_view(), name='password-reset'),
    path('password-reset/validate/', PasswordResetValidationView.as_view(), name='password-reset-validation'),
]
