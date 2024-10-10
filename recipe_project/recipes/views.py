from django.shortcuts import render, get_object_or_404
from .models import Category, Recipe
from rest_framework import viewsets
from .serializers import CategorySerializer, RecipeSerializer

# API Views
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Regular Views
def index(request):
    return render(request, 'index.html')  # Главная страница

def category_list(request):
    categories = Category.objects.all()
    return render(request, 'category_list.html', {'categories': categories})

def recipe_list(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    recipes = category.recipes.all()
    return render(request, 'recipe_list.html', {'category': category, 'recipes': recipes})

def recipe_detail(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    return render(request, 'recipe_detail.html', {'recipe': recipe})