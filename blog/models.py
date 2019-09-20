from django.db import models


class Post(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    lang = models.CharField(max_length=10, default="en")

    def __str__(self):
        return self.name
