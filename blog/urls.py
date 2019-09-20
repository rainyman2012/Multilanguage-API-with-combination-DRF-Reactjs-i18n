
from django.urls import path, re_path
from blog.views import (
    PostViewSet, )
from . import views
from rest_framework.routers import DefaultRouter

app_name = "blog"

router = DefaultRouter()
router.register(r'', PostViewSet, base_name='post')


urlpatterns = router.urls

for url in router.urls:
    print(url, '\n')
