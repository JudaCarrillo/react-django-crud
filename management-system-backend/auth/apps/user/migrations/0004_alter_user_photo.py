# Generated by Django 5.0.2 on 2024-05-03 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_alter_user_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(default='files/users/default.webp', upload_to='files/users/'),
        ),
    ]
