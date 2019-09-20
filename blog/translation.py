from modeltranslation.translator import translator, TranslationOptions
from blog.models import Post


class PostTranslationOptions(TranslationOptions):
    fields = ('name', 'description',)


translator.register(Post, PostTranslationOptions)
