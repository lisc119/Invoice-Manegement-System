from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import RegistrationProfile
from .serializers import RegistrationSerializer, RegistrationValidationSerializer, PasswordResetSerializer, \
    PasswordResetValidationSerializer
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail

User = get_user_model()


class RegistrationView(GenericAPIView):
    """
    post:
    Create a non active user with email info only.
    """
    serializer_class = RegistrationSerializer
    permission_classes = []
    authentication_classes = []

    def post(self, request, *args, **kwargs):
        email = request.data['email']
        username = request.data['email'].split('@')[0]
        new_user = User(email=email, username=username, is_active=False)
        new_user.save()
        registration = RegistrationProfile(user=new_user)
        registration.save()

        send_mail(
            'Your Luna project Login code',
            f'Hello {new_user.username}, \nPlease use the following code to validate your email address: {registration.code}\n'
            f'Thank you for joining our Luna',
            'luna.project.taurus@gmail.com',
            [f'{new_user.email}'],
            fail_silently=False,
        )

        return Response(status=200)


class RegistrationValidationView(GenericAPIView):
    """
    patch:
    Update user info. Activate user.
    """
    permission_classes = []
    serializer_class = RegistrationValidationSerializer

    def patch(self, request, *args, **kwargs):
        code = request.data['code']
        email = request.data['email']
        try:
            check_validation = RegistrationProfile.objects.get(code=code, user__email=email, code_used=False)
            check_validation.user.username = request.data['username']
            check_validation.user.first_name = request.data['first_name']
            check_validation.user.last_name = request.data['last_name']
            check_validation.user.set_password(request.data['password'])
            check_validation.code_used = True
            check_validation.user.is_active = True
            check_validation.user.save()
            check_validation.save()
            return Response(self.get_serializer(check_validation.user).data)
        except ObjectDoesNotExist:
            return Response(status=404, data=f'{code} is not valid with {email}')


class PasswordResetView(GenericAPIView):
    """
    post:
    Send email with password reset code to user.
    """
    permission_classes = []
    serializer_class = PasswordResetSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.send_password_reset_email()
        return Response(status=status.HTTP_200_OK)


class PasswordResetValidationView(GenericAPIView):
    """
    post:
    Update passwords.
    """
    permission_classes = []
    serializer_class = PasswordResetValidationSerializer

    def patch(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(
            serializer.validated_data,
        )
        return Response(status=status.HTTP_200_OK)
