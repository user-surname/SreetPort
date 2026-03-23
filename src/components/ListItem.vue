<template>
  <div class="list-item" @click="emit('click')">
    <img :src="creatorAvatar" :alt="creatorName" class="creator-avatar" />
    <div class="item-info">
      <span class="item-type">{{ type }}</span>
      <span class="item-name">{{ name }}</span>
      <span class="item-creator">{{ creatorName }}</span>
    </div>
    <button v-if="showGo" class="go-btn" @click.stop="emit('go')">GO</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  type: string
  creatorName: string
  creatorAvatar: string
  showGo?: boolean
}>()
const emit = defineEmits(['click', 'go'])
</script>

<style scoped>
.list-item {
  background: var(--sp-gray-bg);
  border-radius: 12px;
  height: var(--sp-list-item-height);
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 14px;
  cursor: pointer;
  transition: opacity 0.15s;
}

.list-item:active { opacity: 0.8; }

.creator-avatar {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--sp-blue-light);
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.item-type {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 600;
  color: var(--sp-gray-text);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-name {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 700;
  color: var(--sp-black);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-creator {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--sp-gray-text);
}

.go-btn {
  background: var(--sp-blue-light);
  border: none;
  border-radius: 50%;
  width: 47px;
  height: 47px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  color: var(--sp-black);
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.1s;
}

.go-btn:active { transform: scale(0.92); }
</style>
