from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import index, CategoryViewSet, RecipeViewSet, category_list, recipe_list, recipe_detail

# Set up the DRF router for API views
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    # Route for the main index page
    path('', index, name='index'),
    # Custom view-based routes for category and recipe lists
    path('categories/', category_list, name='category_list'),
    path('category/<int:category_id>/', recipe_list, name='recipe_list'),
    path('recipe/<int:recipe_id>/', recipe_detail, name='recipe_detail'),
    path('api/', include(router.urls)),  # Move router URLs to '/api/'
]