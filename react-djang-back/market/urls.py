from market.models import Category
from django.urls import path
from .views import (
    CategoryDetail,
    ProductList,
    ProductDetail,
    CategoryList
)
urlpatterns = [
    path('categories/', CategoryList.as_view()),
    path('categories/<id>', CategoryDetail.as_view()),
    path('products/', ProductList.as_view()),
    path('products/<id>', ProductDetail.as_view())
    # path('products/create/', ProductCreate.as_view()),
    # path('products/create/image/', PostImage.as_view()),
    # path('products/create/spec/', SpecCreate.as_view()),
    # path('products/comments/', CommentList.as_view()),
    # path('products/comments/<id>', UpdateComment.as_view()),
    # # path('products/create/comment/', CommentList.as_view()),
    # path('products/like/', LikeProductView.as_view()),

    # path('products/wishlist/', UserLikedProductList.as_view()),
    # path('products/<id>/', ProductItem.as_view()),
    # path('categories/', CategoriesList.as_view()),
    # path('categories/main/', MainCategoryList.as_view()),
    # path('categories/<id>/products/', CategoriesProductList.as_view()),
    # path('categories/products/', CategoryOrderProductList.as_view())
]
