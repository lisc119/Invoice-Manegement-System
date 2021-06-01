from django.urls import path

from users.views import ListUsersAPIView, RetrieveUpdateMeAPIView, RetrieveCertainUserAPIView

urlpatterns = [
    path('me/', RetrieveUpdateMeAPIView.as_view()),
    path('list/', ListUsersAPIView.as_view()),
    path('<int:id>/', RetrieveCertainUserAPIView.as_view()),
]
