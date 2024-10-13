from django.shortcuts import render, get_object_or_404
from .models import Category, Recipe
from rest_framework import viewsets
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

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

@api_view(['GET'])
def recipe_list(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    recipes = category.recipes.all()  # Предположим, что у вас есть related_name='recipes' в модели
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def recipe_detail(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)

