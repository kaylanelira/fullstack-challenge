from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'participations', views.ParticipationViewSet)

urlpatterns = [
    # path("", views.index, name="index"),
    path('api/', include(router.urls)),
    path('api/participations/', views.ParticipationView.as_view(), name='participations'),
]