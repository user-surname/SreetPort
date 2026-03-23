<template>
  <ion-page>
    <ion-content class="detail-content">
      <button class="back-btn" @click="router.back()">←</button>

      <div class="detail-card">
        <!-- Game header -->
        <div class="game-header">
          <img :src="game.creatorAvatar" alt="" class="creator-avatar" />
          <div class="game-title-wrap">
            <h2 class="game-title">{{ game.name }}</h2>
            <span class="game-type">{{ game.type }}</span>
          </div>
          <button class="join-fab" @click="joinGame">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="16" stroke="#8bd7ff" stroke-width="2"/>
              <circle cx="18" cy="18" r="10" stroke="#8bd7ff" stroke-width="1.5" fill="none"/>
            </svg>
          </button>
        </div>

        <div class="divider" />

        <!-- Announcements -->
        <h3 class="section-title">Announcements</h3>

        <div class="announcement-card">
          <div class="ann-author">
            <img :src="game.creatorAvatar" alt="" class="ann-avatar" />
            <span class="ann-name">{{ game.creatorName }} 26 y/o</span>
          </div>
          <p class="ann-text">{{ game.announcement }}</p>
          <span class="ann-date">{{ game.announcementDate }}</span>
        </div>

        <div class="divider" />

        <!-- Participants -->
        <h3 class="section-title">Participants</h3>

        <div
          v-for="(p, i) in game.participants"
          :key="i"
          class="participant-row"
        >
          <img :src="p.avatar" :alt="p.name" class="part-avatar" />
          <span class="part-name">{{ p.name }}</span>
          <button class="msg-btn" @click="router.push('/app/chats/1')">💬</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mockAvatar = 'https://www.figma.com/api/mcp/asset/c82423f2-eb1f-4d96-ac29-cca2fb9274a5'

const game = {
  name: 'GoPlay PingPong',
  type: 'Ping Pong',
  creatorName: 'Josh',
  creatorAvatar: mockAvatar,
  announcement: 'Hi, today i am gonna be playing PingPong on the place approximately around 17:00-19:00. Somebody wanna join?',
  announcementDate: '26/11/2025 12:56:38',
  participants: [
    { name: 'Josh 26 y/o', avatar: mockAvatar },
    { name: 'Maria 23 y/o', avatar: mockAvatar },
    { name: 'Carlos 30 y/o', avatar: mockAvatar },
    { name: 'Ana 25 y/o', avatar: mockAvatar },
  ]
}

function joinGame() {
  alert('Joined the game!')
}
</script>

<style scoped>
.detail-content { --background: var(--sp-white); }

.back-btn {
  position: fixed;
  top: 16px;
  left: 19px;
  z-index: 100;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-card {
  background: var(--sp-gray-bg);
  border-radius: var(--sp-card-radius);
  margin: 58px 33px 24px;
  padding: 16px 20px 24px;
}

.game-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 12px;
}

.creator-avatar {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: cover;
}

.game-title-wrap {
  flex: 1;
}

.game-title {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
}

.game-type {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--sp-gray-text);
}

.join-fab {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider {
  height: 2px;
  background: var(--sp-blue-light);
  border-radius: 20px;
  margin: 8px 0;
}

.section-title {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 700;
  margin: 14px 0 12px;
}

.announcement-card {
  background: var(--sp-gray-bg);
  border-radius: 12px;
  border: 1px solid var(--sp-blue-light);
  padding: 12px 16px;
}

.ann-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.ann-avatar {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  object-fit: cover;
}

.ann-name {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
}

.ann-text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--sp-gray-text);
  line-height: 1.6;
  margin-bottom: 8px;
}

.ann-date {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--sp-gray-value);
  display: block;
  text-align: right;
}

.participant-row {
  background: var(--sp-gray-bg);
  border-radius: 12px;
  height: var(--sp-list-item-height);
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 14px;
  margin-bottom: 8px;
  border: 1px solid rgba(139, 215, 255, 0.3);
}

.part-avatar {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  object-fit: cover;
}

.part-name {
  flex: 1;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
}

.msg-btn {
  background: var(--sp-blue-light);
  border: none;
  border-radius: 50%;
  width: 47px;
  height: 47px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
