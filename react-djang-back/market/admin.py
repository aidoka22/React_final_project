from django.contrib import admin
from .models import Comment, Product, Category, ProductImage, Specification,Spec_detail
# Register your models here.


class ProductSpecDetailAdmin(admin.TabularInline):
    model = Spec_detail
    extra = 1

class ProductSpecAdmin(admin.TabularInline):
    model = Specification
    extra = 1

class ProductImageAdmin(admin.TabularInline):
    model = ProductImage
    extra = 1

class SpecificationAdmin(admin.ModelAdmin):
    inlines = [ProductSpecDetailAdmin]

class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageAdmin, ProductSpecAdmin]


admin.site.register(Comment)
admin.site.register(Product,ProductAdmin)
admin.site.register(Category)
admin.site.register(Specification,SpecificationAdmin)