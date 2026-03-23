<template>
  <ion-page>
    <!-- Search header -->
    <div class="chats-header">
      <div class="chats-search">
        <div class="search-icon">🔍</div>
        <input v-model="searchQuery" type="text" placeholder="find chat" class="search-input" />
      </div>
    </div>

    <ion-content class="chats-content">
      <div class="chats-list">
        <div
          v-for="chat in filteredChats"
          :key="chat.id"
          class="chat-row"
          @click="router.push('/app/chats/' + chat.id)"
        >
          <img :src="chat.avatar" :alt="chat.name" class="chat-avatar" />
          <div class="chat-info">
            <span class="chat-name">{{ chat.name }}</span>
            <span class="chat-preview">{{ chat.lastMessage }}</span>
          </div>
          <div class="chat-meta">
            <span class="chat-time">{{ chat.time }}</span>
            <span v-if="chat.unread" class="chat-badge">{{ chat.unread }}</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const mockAvatar = 'https://www.figma.com/api/mcp/asset/c82423f2-eb1f-4d96-ac29-cca2fb9274a5'

const chats = [
  { id: '1', name: 'Josh', avatar: mockAvatar, lastMessage: 'See you at 5pm!', time: '17:32', unread: 2 },
  { id: '2', name: 'Ping Pong Group', avatar: mockAvatar, lastMessage: 'Ready for tomorrow?', time: '16:10', unread: 0 },
  { id: '3', name: 'Maria', avatar: mockAvatar, lastMessage: 'Can I join the next game?', time: '14:55', unread: 1 },
  { id: '4', name: 'Basketball 3v3', avatar: mockAvatar, lastMessage: 'Court is booked for Friday', time: '13:20', unread: 0 },
  { id: '5', name: 'Carlos', avatar: mockAvatar, lastMessage: 'Great game yesterday!', time: '11:05', unread: 0 },
  { id: '6', name: 'Tennis Group', avatar: mockAvatar, lastMessage: 'Who has the extra racket?', time: '10:00', unread: 3 },
  { id: '7', name: 'Ana', avatar: mockAvatar, lastMessage: '👍', time: '09:30', unread: 0 },
  { id: '8', name: 'Football Pickup', avatar: mockAvatar, lastMessage: 'We need 2 more players', time: 'Yesterday', unread: 0 },
  { id: '9', name: 'Pedro', avatar: mockAvatar, lastMessage: 'Nice to meet you!', time: 'Yesterday', unread: 0 },
  { id: '10', name: 'Running Club', avatar: mockAvatar, lastMessage: 'Sunday 8am at the park', time: 'Mon', unread: 0 },
]

const filteredChats = computed(() =>
  searchQuery.value
    ? chats.filter(c => c.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    : chats
)
</script>

<style scoped>
.chats-header {
  background: var(--sp-white);
  padding: 40px 16px 16px;
  border-bottom: 1px solid rgba(139, 215, 255, 0.3);
}

.chats-search {
  background: var(--sp-white);
  border: 1.5px solid var(--sp-blue-light);
  border-radius: 20px;
  height: 34px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
}

.search-icon {
  font-size: 14px;
  opacity: 0.5;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--sp-gray-text);
  background: transparent;
}

.chats-content { --background: var(--sp-white); }

.chats-list {
  padding: 8px 0;
}

.chat-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 20px;
  height: var(--sp-list-item-height);
  cursor: pointer;
  transition: background 0.1s;
}

.chat-row:active { background: rgba(139, 215, 255, 0.1); }

.chat-avatar {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.chat-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.chat-name {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: var(--sp-black);
}

.chat-preview {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--sp-gray-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.chat-time {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--sp-gray-value);
}

.chat-badge {
  background: var(--sp-blue-light);
  color: var(--sp-black);
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
