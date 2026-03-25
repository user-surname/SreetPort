<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom" class="sp-tab-bar">
        <ion-tab-button tab="map" href="/app/map">
          <div :class="['tab-icon-wrap', route.path === '/app/map' ? 'active' : '']">
            <img :src="mapImg" alt="" style="width:48px;height:48px;object-fit:contain;" />
          </div>
          <span class="tab-label">Map</span>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/app/account">
          <div :class="['tab-icon-wrap', route.path === '/app/account' ? 'active' : '']">
            <img :src="accountImg" alt="" style="width:48px;height:48px;object-fit:contain;" />
          </div>
          <span class="tab-label">Account</span>
        </ion-tab-button>

        <ion-tab-button tab="locations" href="/app/locations">
          <div :class="['tab-icon-wrap', route.path.startsWith('/app/locations') ? 'active' : '']">
            <!-- Blue bird mascot icon for Locations -->
            <img :src="birdImg" alt="" style="width:48px;height:48px;object-fit:contain;" />
          </div>
          <span class="tab-label">Locations</span>
        </ion-tab-button>

        <ion-tab-button tab="chats" href="/app/chats">
          <div :class="['tab-icon-wrap', route.path.startsWith('/app/chats') ? 'active' : '']">
            <img :src="chatsImg" alt="" style="width:48px;height:48px;object-fit:contain;" />
          </div>
          <span class="tab-label">Chats</span>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/vue'
import { useRoute } from 'vue-router'
import mapImg from '@/assets/images/map.png'
import birdImg from '@/assets/images/bird.png'
import accountImg from '@/assets/images/account.png'
import chatsImg from '@/assets/images/chats.png'


const route = useRoute()
</script>

<style scoped>
.sp-tab-bar {
  --background: var(--sp-white);
  border-top: 6px solid var(--sp-blue-light);
  height: var(--sp-tab-bar-height);
  padding: 0;
}

ion-tab-button {
  --color: var(--sp-black);
  --color-selected: var(--sp-black);
  flex-direction: column;
  gap: 2px;
}

.tab-icon-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 56px;
}

.tab-icon-wrap.active::before {
  content: '';
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--sp-blue-light);
  border-radius: 0 0 3px 3px;
}

.tab-label {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--sp-black);
}
</style>
