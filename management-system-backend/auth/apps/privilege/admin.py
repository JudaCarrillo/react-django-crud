from django.contrib import admin
from apps.privilege.models import Privilege

# Register your models here.


class PrivilegeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')


admin.site.register(Privilege, PrivilegeAdmin)
