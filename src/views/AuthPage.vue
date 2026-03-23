<template>
  <ion-page class="auth-page">
    <div class="auth-content">
      <div class="logo-wrap">
        <img src="https://www.figma.com/api/mcp/asset/d10df550-b94a-49ae-9dcb-1258c2ce90ec" alt="StreetPORT" class="logo-img" />
      </div>

      <div class="btn-group">
        <button class="sp-btn" @click="router.push('/login')">Log in</button>
        <button class="sp-btn" @click="router.push('/signup')">Sign in</button>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped>
.auth-page {
  background: var(--sp-white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 40px;
  gap: 0;
}

.logo-wrap {
  width: 235px;
  height: 235px;
  margin-bottom: 80px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.btn-group {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 272px;
}

.sp-btn {
  background: var(--sp-gray-bg);
  border: 6px solid var(--sp-blue-light);
  border-radius: var(--sp-card-radius);
  height: var(--sp-btn-height);
  width: 100%;
  font-family: var(--font-ui);
  font-size: 32px;
  letter-spacing: 3.2px;
  color: var(--sp-black);
  cursor: pointer;
  transition: transform 0.1s, opacity 0.1s;
}

.sp-btn:active {
  transform: scale(0.97);
  opacity: 0.85;
}
</style>
