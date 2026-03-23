<template>
  <div class="info-window">
    <div class="info-header">
      <strong class="info-name">{{ game.name }}</strong>
      <span class="info-creator">{{ game.creator }}</span>
    </div>
    <div class="info-footer">
      <span class="info-type">{{ game.type }}</span>
      <button class="info-btn" @click="emit('ver', game.id)">Ver</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  game: {
    id: string
    name: string
    creator: string
    type: string
    lat: number
    lng: number
  }
}>()

const emit = defineEmits<{
  ver: [id: string]
}>()
</script>

<style scoped>
.info-window {
  font-family: var(--font-body);
  padding: 8px 4px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-header {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-name {
  font-size: 15px;
  font-weight: 700;
  color: #000;
}

.info-creator {
  font-size: 12px;
  font-weight: 600;
  color: #808080;
}

.info-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.info-type {
  font-size: 11px;
  font-weight: 700;
  color: #0037cc;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-btn {
  background: #8bd7ff;
  border: none;
  border-radius: 8px;
  padding: 5px 12px;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.1s;
}

.info-btn:active {
  transform: scale(0.95);
}
</style>