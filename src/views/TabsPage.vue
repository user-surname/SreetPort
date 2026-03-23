<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom" class="sp-tab-bar">
        <ion-tab-button tab="map" href="/app/map">
          <div :class="['tab-icon-wrap', route.path === '/app/map' ? 'active' : '']">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 4C17.8 4 12 9.8 12 17C12 27 25 44 25 44C25 44 38 27 38 17C38 9.8 32.2 4 25 4ZM25 22C22.2 22 20 19.8 20 17C20 14.2 22.2 12 25 12C27.8 12 30 14.2 30 17C30 19.8 27.8 22 25 22Z" fill="currentColor"/>
              <rect x="8" y="38" width="34" height="4" rx="2" fill="currentColor" opacity="0.4"/>
            </svg>
          </div>
          <span class="tab-label">Map</span>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/app/account">
          <div :class="['tab-icon-wrap', route.path === '/app/account' ? 'active' : '']">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="18" r="9" stroke="currentColor" stroke-width="3" fill="none"/>
              <path d="M8 42C8 34.3 16 28 25 28C34 28 42 34.3 42 42" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
            </svg>
          </div>
          <span class="tab-label">Account</span>
        </ion-tab-button>

        <ion-tab-button tab="locations" href="/app/locations">
          <div :class="['tab-icon-wrap', route.path.startsWith('/app/locations') ? 'active' : '']">
            <!-- Blue bird mascot icon for Locations -->
            <img src="https://www.figma.com/api/mcp/asset/d10df550-b94a-49ae-9dcb-1258c2ce90ec" alt="" style="width:48px;height:48px;object-fit:contain;" />
          </div>
          <span class="tab-label">Locations</span>
        </ion-tab-button>

        <ion-tab-button tab="chats" href="/app/chats">
          <div :class="['tab-icon-wrap', route.path.startsWith('/app/chats') ? 'active' : '']">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="8" width="42" height="30" rx="6" stroke="currentColor" stroke-width="3" fill="none"/>
              <path d="M14 44L20 38H36" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>
              <circle cx="16" cy="23" r="2.5" fill="currentColor"/>
              <circle cx="25" cy="23" r="2.5" fill="currentColor"/>
              <circle cx="34" cy="23" r="2.5" fill="currentColor"/>
            </svg>
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
