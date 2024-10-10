from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.views.generic import TemplateView

# Swagger documentation setup
schema_view = get_schema_view(
    openapi.Info(
        title="Recipes API",
        default_version='v1',
        description="API for recipe management",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # Serve the frontend template (index.html) for the root URL
    path('', TemplateView.as_view(template_name='index.html'), name='home'),
    path('', include('recipes.urls')),

    # Swagger UI for API documentation
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
