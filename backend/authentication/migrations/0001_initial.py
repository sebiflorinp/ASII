# Generated by Django 5.0.2 on 2024-02-19 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=20, unique=True)),
                ('dietary_preferences', models.CharField(max_length=200)),
                ('allergens', models.CharField(max_length=200)),
                ('height', models.FloatField()),
                ('weight', models.FloatField()),
                ('sex', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=20)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
