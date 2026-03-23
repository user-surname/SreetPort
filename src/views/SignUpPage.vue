<template>
  <ion-page class="form-page">
    <div class="form-page__inner">
      <div class="logo-wrap">
        <img src="https://www.figma.com/api/mcp/asset/d10df550-b94a-49ae-9dcb-1258c2ce90ec" alt="StreetPORT" class="logo-img" />
      </div>

      <div class="form-card">
        <div class="sp-input-wrap">
          <input v-model="form.nickname" class="sp-input" type="text" placeholder="Nickname" />
        </div>
        <div class="sp-input-wrap">
          <input v-model="form.email" class="sp-input" type="email" placeholder="Email" />
        </div>
        <div class="sp-input-wrap">
          <input v-model="form.password" class="sp-input" type="password" placeholder="Password" />
        </div>
        <div class="sp-input-wrap">
          <input v-model="form.age" class="sp-input" type="number" placeholder="Age" />
        </div>

        <button class="sp-btn" @click="handleSignup">Next</button>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = reactive({ nickname: '', email: '', password: '', age: '' })

function handleSignup() {
  if (form.nickname && form.email && form.password && form.age) {
    router.replace('/app/map')
  }
}
</script>

<style scoped>
.form-page {
  background: var(--sp-white);
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-page__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
}

.logo-wrap {
  width: 235px;
  height: 235px;
  margin-bottom: 24px;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.form-card {
  background: var(--sp-gray-bg);
  border-radius: var(--sp-card-radius);
  padding: 24px 23px 28px;
  width: 100%;
  max-width: 331px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sp-input-wrap {
  width: 100%;
}

.sp-input {
  width: 100%;
  height: var(--sp-input-height);
  background: var(--sp-white);
  border: 1.5px solid var(--sp-blue-light);
  border-radius: var(--sp-input-radius);
  padding: 0 15px;
  font-family: var(--font-body);
  font-size: 16px;
  color: var(--sp-gray-text);
  outline: none;
}

.sp-input:focus {
  border-color: var(--sp-blue-dark);
  color: var(--sp-black);
}

.sp-btn {
  background: var(--sp-gray-bg);
  border: 6px solid var(--sp-blue-light);
  border-radius: var(--sp-card-radius);
  height: var(--sp-btn-height);
  width: 100%;
  max-width: 272px;
  align-self: center;
  font-family: var(--font-ui);
  font-size: 32px;
  letter-spacing: 3.2px;
  color: var(--sp-black);
  cursor: pointer;
  margin-top: 8px;
  transition: transform 0.1s;
}

.sp-btn:active { transform: scale(0.97); }
</style>
