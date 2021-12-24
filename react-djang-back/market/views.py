from django.db.models import query
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Category, Comment, Product, Specification
from rest_framework import generics, pagination, status, permissions
from .serializers import (
    CategoryRecursiveSerializer,
    CategorySerializer,
    ProductSerializer,
)
from rest_framework.parsers import MultiPartParser, FormParser
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


class ProductList(generics.ListCreateAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]
    filter_backends = [filters.SearchFilter,
                       DjangoFilterBackend, filters.OrderingFilter]
    ordering_fields = ['views', 'price', 'discount', 'created_at']
    search_fields = ['name']
    filterset_fields = ['price', 'category', 'owner']


class ProductDetail(generics.RetrieveDestroyAPIView):
    lookup_field = 'id'
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [permissions.AllowAny]


class CategoryList(generics.ListCreateAPIView):
    serializer_class = CategoryRecursiveSerializer
    queryset = Category.objects.filter(parent_category_id__isnull=True)
    permission_classes = [permissions.AllowAny]
    pagination_class = None


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
