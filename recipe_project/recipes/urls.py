from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import index, CategoryViewSet, RecipeViewSet, category_list, recipe_list, recipe_detail

# Set up the DRF router for API views
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('', index, name='index'),
    path('categories/', category_list, name='category_list'),
    path('api/categories/<int:category_id>/recipes/', recipe_list, name='recipe_list'),
    path('api/recipes/<int:recipe_id>/', recipe_detail, name='recipe_detail'),  # Детали рецепта по recipe_id
    path('api/', include(router.urls)),
]
