# Generated by Django 2.2.3 on 2019-09-20 19:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20190920_1905'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='lang',
        ),
    ]
