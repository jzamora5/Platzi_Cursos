""" Posts Admin """

from django.contrib import admin

# Register your models here.


from posts.models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('pk', 'user', 'profile', 'title')
    list_display_links = ('pk', 'user')
    search_fields = ('user__email',
                     'user__username',
                     'user__first_name',
                     'user__last_name',
                     'phone_number')

    list_filter = ('created', 'modified',
                   'user__is_active', 'user__is_staff')
