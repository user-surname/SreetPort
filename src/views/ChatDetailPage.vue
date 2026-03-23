<template>
  <ion-page class="chat-page">
    <!-- Chat header -->
    <div class="chat-header">
      <button class="back-btn" @click="router.back()">←</button>
      <img :src="chat.avatar" :alt="chat.name" class="peer-avatar" />
      <div class="peer-info">
        <span class="peer-name">{{ chat.name }}</span>
        <span class="peer-status">Online</span>
      </div>
      <button class="more-btn">⋮</button>
    </div>

    <!-- Messages -->
    <ion-content class="messages-content" ref="contentRef">
      <div class="messages-wrap">
        <div class="date-label">Today</div>

        <div
          v-for="(msg, i) in chat.messages"
          :key="i"
          :class="['msg-bubble', msg.sent ? 'sent' : 'received']"
        >
          <p>{{ msg.text }}</p>
        </div>
      </div>
    </ion-content>

    <!-- Input bar -->
    <div class="input-bar">
      <button class="attach-btn">📎</button>
      <input
        v-model="newMessage"
        type="text"
        placeholder="Message..."
        class="msg-input"
        @keyup.enter="sendMessage"
      />
      <button class="send-btn" @click="sendMessage">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" fill="#8bd7ff"/>
          <path d="M8 14L20 14M14 8L20 14L14 20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const newMessage = ref('')
const mockAvatar = 'https://www.figma.com/api/mcp/asset/c82423f2-eb1f-4d96-ac29-cca2fb9274a5'

const chat = reactive({
  name: 'Josh',
  avatar: mockAvatar,
  messages: [
    { text: 'Hey! Are you coming to play ping pong today?', sent: false },
    { text: 'Yes! What time?', sent: true },
    { text: 'Around 17:00 at the usual spot', sent: false },
    { text: 'Perfect, see you there!', sent: true },
    { text: 'Bring your paddle if you have one', sent: false },
    { text: 'Sure! Any others joining?', sent: true },
    { text: 'Maria and Carlos are coming too', sent: false },
    { text: 'Great, it\'ll be a good session', sent: true },
    { text: 'See you at 5pm!', sent: false },
    { text: '👍', sent: true },
  ]
})

function sendMessage() {
  if (!newMessage.value.trim()) return
  chat.messages.push({ text: newMessage.value, sent: true })
  newMessage.value = ''
}
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
}

.chat-header {
  background: var(--sp-white);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 40px 16px 14px;
  border-bottom: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.back-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.peer-avatar {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  object-fit: cover;
}

.peer-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.peer-name {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
}

.peer-status {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--sp-gray-text);
}

.more-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 4px 8px;
}

.messages-content { --background: var(--sp-white); }

.messages-wrap {
  padding: 16px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date-label {
  text-align: center;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: var(--sp-gray-value);
  margin-bottom: 4px;
}

.msg-bubble {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 18px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}

.msg-bubble.received {
  background: var(--sp-gray-bg);
  align-self: flex-start;
  border-bottom-left-radius: 4px;
  color: var(--sp-black);
}

.msg-bubble.sent {
  background: var(--sp-blue-light);
  align-self: flex-end;
  border-bottom-right-radius: 4px;
  color: var(--sp-black);
}

.msg-bubble p { margin: 0; }

.input-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px 20px;
  background: var(--sp-white);
  border-top: 1px solid rgba(139, 215, 255, 0.3);
}

.attach-btn {
  background: var(--sp-gray-bg);
  border: none;
  border-radius: 8px;
  width: 28px;
  height: 28px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.msg-input {
  flex: 1;
  height: 41px;
  background: var(--sp-white);
  border: 1.5px solid var(--sp-blue-light);
  border-radius: 20px;
  padding: 0 16px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  color: var(--sp-black);
  outline: none;
}

.send-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s;
}

.send-btn:active { transform: scale(0.9); }
</style>
