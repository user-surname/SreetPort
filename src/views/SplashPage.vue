<template>
  <ion-page class="splash-page">
    <div class="splash-content">
      <div class="logo-wrap">
        <img :src="birdImg" alt="StreetPORT mascot" class="logo-img" />
      </div>
      <h1 class="splash-title">
        <span>Wellcome to</span>
        <br />
        <span class="brand">StreetPORT</span>
      </h1>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import birdImg from '@/assets/images/bird.png'


const router = useRouter()
onMounted(() => {
  setTimeout(() => router.replace('/auth'), 2200)
})
</script>

<style scoped>
.splash-page {
  background: var(--sp-white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.logo-wrap {
  width: 235px;
  height: 235px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.splash-title {
  font-family: var(--font-display);
  font-size: 32px;
  letter-spacing: 3.2px;
  color: var(--sp-black);
  text-align: center;
  line-height: 1.6;
  font-weight: normal;
}

.brand {
  display: block;
}
</style>
