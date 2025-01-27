from django.contrib import admin

import chats
from chats.models import Chat, ChatMessage

admin.site.register(Chat)
admin.site.register(ChatMessage)