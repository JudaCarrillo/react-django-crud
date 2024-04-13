from .serializers import CategorySerializer, CustomCategorySerializer
from .models import Category

import datetime


class CategoryManager:

    def get_all(self):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return {'success': True, 'data': serializer.data, 'message': 'Categories found'}

    def get_by_id(self, id):
        try:
            category = Category.objects.get(id=id)
            serializer = CategorySerializer(category)
            return {'success': True, 'data': serializer.data, 'message': 'Category found'}
        except Category.DoesNotExist:
            return {'success': False, 'data': None, 'message': 'Category not found'}

    def create(self, name, description):
        date = datetime.datetime.now()
        category = Category.objects.create(
            name=name,
            description=description,
            created_at=date
        )
        serializer = CategorySerializer(category)
        return {'success': True, 'data': serializer.data, 'message': 'Category created'}

    def delete(self, id):
        try:
            Category.objects.get(id=id).delete()
            return {'success': True, 'data': None, 'message': 'Category deleted'}
        except:
            return {'success': False, 'data': None, 'message': 'Category not found'}

    def update(self, id, **extra_fields):
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return {'success': False, 'data': None, 'message': 'Category not found'}

        serializer = CustomCategorySerializer(
            category, data=extra_fields, partial=True)

        if serializer.is_valid():
            serializer.save()
            return {'success': True, 'data': serializer.data, 'message': 'Category updated'}
        else:
            return {'success': False, 'data': None, 'message': 'The category was not updated. ' + str(serializer.errors)}