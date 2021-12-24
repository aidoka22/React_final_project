from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from rest_framework import serializers
from rest_framework import fields
from rest_framework.fields import SerializerMethodField
from .models import Product, Category, Comment, ProductImage, Specification, Spec_detail

User = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= "__all__"

class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, instance):
        serializer = self.parent.parent.__class__(instance, context=self.context)
        return serializer.data

class CategoryRecursiveSerializer(serializers.ModelSerializer):
    child_category = RecursiveSerializer(source = "child_categories", many=True, read_only = True)
    parent_category = serializers.StringRelatedField()

    def get_parent_category(self, obj):
        return CategorySerializer(obj.parent_category).data

    class Meta:
        model = Category
        fields= "__all__"

class SpecificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specification
        exclude= ['product', ]

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    # category = CategoryRecursiveSerializer()
    # specification = SpecificationSerializer(source='specification_set',many=True)
    likes = serializers.IntegerField(source = "likes.count", read_only = True)
    saved =serializers.IntegerField(source = "saved.count", read_only = True)
    # image_set = ProductImageSerializer(source ='images' , many= True)
    liked = serializers.SerializerMethodField()
    isSaved = serializers.SerializerMethodField()

    def get_liked(self, obj):
        user = self.context['request'].user
        return user in obj.likes.all()

    def get_isSaved(self, obj):
        user = self.context['request'].user
        return user in obj.saved.all()

    class Meta:
        model = Product
        fields= '__all__'