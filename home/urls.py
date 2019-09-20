from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf.urls.i18n import i18n_patterns
urlpatterns = [
    path('admin/', admin.site.urls),

]


urlpatterns += [
    path('posts/', include('blog.urls', namespace='blog')),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))
]
