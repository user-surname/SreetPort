<template>
  <ion-page>
    <ion-content class="locs-content">
      <div class="locs-wrap">
        <!-- Current section -->
        <p class="section-label">CURRENT</p>
        <ListItem
          v-for="game in currentGames"
          :key="game.id"
          :name="game.name"
          :type="game.type"
          :creator-name="game.creator"
          :creator-avatar="game.avatar"
          :show-go="true"
          @click="router.push('/app/locations/' + game.id)"
          @go="router.push('/app/locations/' + game.id)"
        />

        <!-- In Range section -->
        <p class="section-label range-label">IN RANGE</p>
        <ListItem
          v-for="game in rangeGames"
          :key="game.id"
          :name="game.name"
          :type="game.type"
          :creator-name="game.creator"
          :creator-avatar="game.avatar"
          :show-go="true"
          @click="router.push('/app/locations/' + game.id)"
          @go="router.push('/app/locations/' + game.id)"
        />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { useRouter } from 'vue-router'
import ListItem from '@/components/ListItem.vue'

const router = useRouter()

const mockAvatar = 'https://www.figma.com/api/mcp/asset/c82423f2-eb1f-4d96-ac29-cca2fb9274a5'

const currentGames = [
  { id: '1', name: 'Ping Pong GoPlay Josh', type: 'Ping Pong', creator: 'Josh', avatar: mockAvatar },
  { id: '2', name: 'Basketball 3v3', type: 'Basketball', creator: 'Maria', avatar: mockAvatar },
  { id: '3', name: 'Football Pickup', type: 'Football', creator: 'Carlos', avatar: mockAvatar },
]

const rangeGames = [
  { id: '4', name: 'Tennis Singles Open', type: 'Tennis', creator: 'Ana', avatar: mockAvatar },
  { id: '5', name: 'Volleyball Beach', type: 'Volleyball', creator: 'Pedro', avatar: mockAvatar },
  { id: '6', name: 'Running Club 5K', type: 'Running', creator: 'Luis', avatar: mockAvatar },
  { id: '7', name: 'Paddle GoPlay', type: 'Paddle', creator: 'Sofia', avatar: mockAvatar },
  { id: '8', name: 'Frisbee Ultimate', type: 'Frisbee', creator: 'Ivan', avatar: mockAvatar },
  { id: '9', name: 'Skateboard Session', type: 'Skate', creator: 'Emma', avatar: mockAvatar },
]
</script>

<style scoped>
.locs-content { --background: var(--sp-white); }

.locs-wrap {
  padding: 16px var(--sp-page-padding) 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.section-label {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  color: var(--sp-gray-text);
  letter-spacing: 1.5px;
  padding: 8px 0 4px;
}

.range-label { margin-top: 12px; }
</style>
