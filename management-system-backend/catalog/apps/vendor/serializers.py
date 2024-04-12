from rest_framework import serializers
from .models import Vendor


class VendorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vendor
        fields = '__all__'


class CustomVendorSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    direction = serializers.CharField()
    phone = serializers.CharField()

    def create(self, validated_data):
        return Vendor.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.email = validated_data.get('email', instance.email)
        instance.direction = validated_data.get(
            'direction', instance.direction)
        instance.phone = validated_data.get('phone', instance.phone)
        instance.save()
        return instance

    def delete(self, instance):
        instance.delete()
