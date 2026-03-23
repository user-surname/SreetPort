<template>
  <ion-page>
    <ion-content class="account-content" :scroll-y="true">
      <!-- Blue header -->
      <div class="profile-header">
        <div class="avatar-wrap">
          <img :src="user.avatar" :alt="user.name" class="avatar" />
          <button class="edit-avatar-btn" title="Change photo">✏️</button>
        </div>
      </div>

      <div class="profile-body">
        <h2 class="profile-name">{{ user.name }}</h2>

        <!-- Fields -->
        <div class="fields-section">
          <div class="field-row">
            <span class="field-label">Age</span>
            <span class="field-value">{{ user.age }}</span>
            <button class="edit-btn" @click="editField('age')">✏️</button>
          </div>
          <div class="divider" />

          <div class="field-row">
            <span class="field-label">Home</span>
            <button class="set-home-btn" @click="editField('home')">SET HOME</button>
          </div>
          <div class="divider" />

          <div class="field-row">
            <span class="field-label">Range</span>
            <span class="field-value">{{ user.range }} km</span>
            <button class="edit-btn" @click="editField('range')">✏️</button>
          </div>
          <div class="divider" />

          <div class="field-row align-start">
            <span class="field-label">Contacts</span>
            <div class="contacts-val">
              <span class="contact-link">{{ user.telegram }}</span>
              <span class="contact-link">{{ user.phone }}</span>
            </div>
            <button class="edit-btn" @click="editField('contacts')">✏️</button>
          </div>
          <div class="divider" />
        </div>

        <!-- About -->
        <div class="about-section">
          <div class="about-header">
            <h3 class="about-title">About you</h3>
            <button class="edit-btn" @click="editField('about')">✏️</button>
          </div>
          <p class="about-text">{{ user.about }}</p>
        </div>
        <div class="divider" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'
import { reactive } from 'vue'

const user = reactive({
  name: 'Shrek Swampson',
  age: 26,
  home: 'Set...',
  range: 15,
  telegram: 'telgramAccount@telegram',
  phone: '+34 647 489 823',
  about: 'Me gusta mantenerme activo y aprovechar cualquier excusa para hacer deporte. No soy profesional, pero sí constante: disfruto entrenar, mejorar poco a poco y, sobre todo, compartir el deporte con otras personas. Busco gente con ganas de moverse, pasarlo bien y crear una rutina deportiva sin que se convierta en una obligación.',
  avatar: 'https://www.figma.com/api/mcp/asset/c82423f2-eb1f-4d96-ac29-cca2fb9274a5',
})

function editField(field: string) {
  console.log('edit', field)
}
</script>

<style scoped>
.account-content {
  --background: var(--sp-white);
}

.profile-header {
  background: var(--sp-blue-light);
  height: 159px;
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-wrap {
  position: absolute;
  bottom: -70px;
  display: flex;
  align-items: flex-end;
  gap: 0;
}

.avatar {
  width: 195px;
  height: 195px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--sp-white);
}

.edit-avatar-btn {
  position: absolute;
  bottom: 8px;
  right: -8px;
  background: var(--sp-white);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.profile-body {
  padding: 0 var(--sp-page-padding);
  padding-top: 90px;
}

.profile-name {
  font-family: var(--font-body);
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 40px;
}

.fields-section {
  display: flex;
  flex-direction: column;
}

.field-row {
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 8px 0;
}

.field-row.align-start { align-items: flex-start; padding: 12px 0; }

.field-label {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 600;
  color: var(--sp-black);
  flex: 0 0 130px;
}

.field-value {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 600;
  color: var(--sp-gray-value);
  flex: 1;
  text-align: right;
  margin-right: 8px;
}

.set-home-btn {
  background: var(--sp-blue-light);
  border: none;
  border-radius: 20px;
  height: 32px;
  padding: 0 14px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--sp-white);
  cursor: pointer;
  margin-left: auto;
}

.edit-btn {
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
  opacity: 0.6;
}

.contacts-val {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  margin-right: 8px;
}

.contact-link {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 600;
  color: var(--sp-blue-dark);
  text-align: right;
}

.divider {
  height: 2px;
  background: var(--sp-blue-light);
  border-radius: 20px;
  margin: 4px 0;
}

.about-section {
  padding: 16px 0 8px;
}

.about-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.about-title {
  font-family: var(--font-body);
  font-size: 24px;
  font-weight: 600;
}

.about-text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 600;
  color: var(--sp-gray-text);
  line-height: 1.6;
}
</style>
