from django.utils.translation import ugettext_lazy as _
from rest_framework import serializers
from .models import Post
from pudb import set_trace


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('name', 'description')
