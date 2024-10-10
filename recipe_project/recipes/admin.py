from django.contrib import admin
from .models import Category, Recipe

# Регистрируем модели для отображения в админке
admin.site.register(Category)
admin.site.register(Recipe)
