from django.contrib import admin
from shop.models import Brand, Cart, CartProduct, Category, Customer, Order, Product, ProductView, Review, Slider, TrendingProduct

# Register your models here.

admin.site.register([
    Customer,
    Category,
    Brand,
    Product,
    ProductView,
    Review,
    Slider,
    TrendingProduct,
    Cart,
    CartProduct,
    Order,
])
