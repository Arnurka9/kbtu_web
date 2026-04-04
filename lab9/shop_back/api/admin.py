from django.contrib import admin
from .models import Product, Category

admin.site.register(Category)

class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "price", "count", "is_active", "category")
    list_filter = ("is_active", "category")
    search_fields = ("name",)

admin.site.register(Product, ProductAdmin)
