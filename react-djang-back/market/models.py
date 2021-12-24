from re import T
from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class PublicModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(PublicModel):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000)
    parent_category = models.ForeignKey(
        'self', on_delete=models.CASCADE, related_name='child_categories', null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


Product_type = [
    ('MEN', 'For Mens'),
    ('WOMAN', 'For Woman'),
    ('CHILD', 'For children'),
    ('UNI', 'Unisex')
]

class Product(PublicModel):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000)
    active = models.BooleanField(default=True)
    category = models.ForeignKey(
        Category, models.CASCADE, null=True, blank=True)
    price = models.PositiveBigIntegerField(default=0)
    discount = models.PositiveIntegerField(default=0, null=True, blank=True)
    product_count = models.PositiveBigIntegerField(default=0)

    views = models.IntegerField(default=0, editable=False)
    likes = models.ManyToManyField(
        User, related_name="likes", blank=True, editable=False)
    saved = models.ManyToManyField(
        User, related_name="saved", blank=True, editable=False)

    type = models.CharField(
        max_length=5,
        choices=Product_type,
        default='UNI',
    )


    def __str__(self):
        return self.name

    def likes_cnt(self):
        return self.likes.count()

    def current_views(self):
        return self.views.hits

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Product'
        verbose_name_plural = 'Products'


class ProductImage(PublicModel):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images", null=False)
    image = models.ImageField(null=False, upload_to='products')


class Specification(PublicModel):
    type_title = models.CharField(max_length=250, null=False)
    product = models.ForeignKey(Product, models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.type_title


class Spec_detail(PublicModel):
    specification = models.ForeignKey(
        Specification, models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=250, null=False)
    value = models.TextField(null=False)

    def __str__(self):
        return self.name


class Comment(PublicModel):
    user = models.ForeignKey(
        User, blank=True, null=True, on_delete=models.CASCADE)
    advantages = models.TextField(null=True, blank=True)
    disadvantages = models.TextField(null=True, blank=True)
    comment = models.TextField(null=False)
    active = models.BooleanField(default=True)
    product = models.ForeignKey(
        Product, blank=True, null=True, on_delete=models.CASCADE, related_name="comments")
    likes = models.ManyToManyField(
        User, related_name="comment_likes", blank=True, editable=False)

    class Meta:
        ordering = ['created_at']
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def __str__(self):
        return f'Comment: {self.comment} by {self.user}'


class Company(PublicModel):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000)
    # should be changed to false to verify the companies existance
    active = models.BooleanField(default=True)
    # product_list = models.ManyToManyField(Product, models.)
    # admin_users = models.ManyToManyField(User, models.DO_NOTHING, null = True, blank= True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
