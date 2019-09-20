from django.http import HttpResponse, HttpResponseBadRequest, JsonResponse
from django.utils import translation
from pudb import set_trace

# from rest_framework import viewsets
from rest_framework.response import Response

from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST
)


from rest_framework import viewsets
from blog.serializers import (
    PostSerializer,
)

from .models import Post

from rest_framework import authentication, permissions


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'pk'

    def list(self, request, *args, **kwargs):
        response_language = request.headers['Accept-Language']
        translation.activate(response_language)

        return super().list(request, *args, **kwargs)
