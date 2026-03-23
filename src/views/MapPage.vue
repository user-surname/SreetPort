<template>
  <ion-page class="map-page">

<!-- Search bar -->
<div class="search-bar-wrap">
  <div class="search-bar">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search..."
      class="search-input"
      @input="onSearch"
    />
  </div>

  <!-- Resultados -->
  <div v-if="searchResults.length > 0" class="search-results">
    <div
      v-for="game in searchResults"
      :key="game.id"
      class="search-result-item"
      @click="goToGame(game)"
    >
      <span class="result-name">{{ game.name }}</span>
      <span class="result-creator">{{ game.creator }}</span>
    </div>
  </div>
</div>

    <!-- Map container -->
    <div ref="mapRef" class="map-container"></div>

    <!-- FAB: Set location -->
    <button class="fab-set" @click="setGameLocation">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="13" stroke="#333" stroke-width="2" fill="white"/>
        <path d="M15 7C11.1 7 8 10.1 8 14C8 19.5 15 25 15 25C15 25 22 19.5 22 14C22 10.1 18.9 7 15 7ZM15 17C13.3 17 12 15.7 12 14C12 12.3 13.3 11 15 11C16.7 11 18 12.3 18 14C18 15.7 16.7 17 15 17Z" fill="#333"/>
      </svg>
    </button>
  </ion-page>
</template>

<script setup lang="ts">
import { createApp, h } from 'vue'
import { IonPage } from '@ionic/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { Loader } from '@googlemaps/js-api-loader'
import PlayInfoWindow from '@/components/PlayInfoWindow.vue'

const router = useRouter()
const mapRef = ref<HTMLElement | null>(null)
const searchQuery = ref('')

let map: google.maps.Map | null = null
const markers: google.maps.marker.AdvancedMarkerElement[] = []

const loader = new Loader({
  apiKey: 'AIzaSyDqZw7wOW8CbdDxXeQCYg7IHhz1oDS7UcI',
  version: 'weekly',
  libraries: ['maps', 'marker'],
})

const games = [
  { id: '1', name: 'Ping Pong GoPlay Josh', creator: 'Josh',   type: 'Ping Pong',   lat: 40.420, lng: -3.700 },
  { id: '2', name: 'Basketball 3v3',        creator: 'Maria',  type: 'Basketball',  lat: 40.413, lng: -3.708 },
  { id: '3', name: 'Football Pickup',       creator: 'Carlos', type: 'Football',    lat: 40.418, lng: -3.695 },
]

onMounted(async () => {
  if (!mapRef.value) {
    console.error('❌ mapRef es null')
    return
  }
  console.log('✅ mapRef existe:', mapRef.value)

  try {
    console.log('⏳ Cargando librería maps...')
    const { Map } = await loader.importLibrary('maps') as google.maps.MapsLibrary
    console.log('✅ Librería maps cargada')

    console.log('⏳ Cargando librería marker...')
    const { AdvancedMarkerElement, PinElement } = await loader.importLibrary('marker') as google.maps.MarkerLibrary
    console.log('✅ Librería marker cargada')

    console.log('⏳ Creando mapa...')
    map = new Map(mapRef.value, {
      center: { lat: 40.416, lng: -3.703 },
      zoom: 14,
      mapId: 'f9f04215d3d0092c22b1aac5',
      disableDefaultUI: true,
    })

    // Marcador de casa
    const homePin = new PinElement({
      background: '#333333',
      borderColor: '#000000',
      glyphColor: '#ffffff',
      glyph: Object.assign(document.createElement('span'), { textContent: '🏠' }),     
      scale: 1.2,
    })
    new AdvancedMarkerElement({
      map,
      position: { lat: 40.416, lng: -3.703 },
      content: homePin,  // ← PinElement directamente, sin .element
      title: 'Home',
    })

    // Marcadores de juegos
    for (const game of games) {
      const pin = new PinElement({
        background: '#8bd7ff',
        borderColor: '#0037cc',
        glyphColor: '#000000',
        glyph: Object.assign(document.createElement('span'), { textContent: '🏓' }),
        scale: 1.1,
      })

      const marker = new AdvancedMarkerElement({
        map,
        position: { lat: game.lat, lng: game.lng },
        content: pin,    // ← PinElement directamente, sin .element
        title: game.name,
      })

const infoContent = renderInfoWindow(game)

const infoWindow = new google.maps.InfoWindow({
  content: infoContent  // ← div con el componente Vue montado dentro
})

      // ← gmp-click en vez de click
      marker.addListener('gmp-click', () => {
        infoWindow.open({ anchor: marker, map })
      })

      markers.push(marker)
    }

  } catch (error) {
    console.error('Error al cargar Google Maps:', error)
  }
})

const searchResults = ref<typeof games>([])

// Función que convierte el componente Vue a HTML puro para Google Maps
function renderInfoWindow(game: typeof games[0]): HTMLElement {
  const div = document.createElement('div')
  const app = createApp({
    render() {
      return h(PlayInfoWindow, {
        game,
        onVer: (id: string) => {
          window.dispatchEvent(new CustomEvent('goto-game', { detail: id }))
        }
      })
    }
  })
  app.mount(div)
  return div
}

function onSearch() {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  searchResults.value = games.filter(game =>
    game.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    game.creator.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

function goToGame(game: typeof games[0]) {
  // Centrar mapa en el juego
  if (map) {
    map.panTo({ lat: game.lat, lng: game.lng })
    map.setZoom(16)
  }
  // Limpiar búsqueda
  searchQuery.value = ''
  searchResults.value = []
}

function handleGotoGame(event: Event) {
  const id = (event as CustomEvent).detail
  router.push('/app/locations/' + id)
}

onMounted(() => {
  window.addEventListener('goto-game', handleGotoGame)
})

onUnmounted(() => {
  window.removeEventListener('goto-game', handleGotoGame)
  markers.forEach(m => (m.map = null))
  map = null
})

function setGameLocation() {
  if (!map) return
  map.panTo({ lat: 40.416, lng: -3.703 })
  map.setZoom(16)
}
</script>

<style scoped>
.map-page {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

/* Fuerza al contenedor de Ionic a ocupar todo */
:deep(ion-content) {
  --overflow: hidden;
}

.search-bar-wrap {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 1000;
}

.search-bar {
  background: white;
  border: 2px solid var(--sp-blue-light);
  border-radius: 20px;
  height: 37px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 600;
  color: var(--sp-gray-text);
  background: transparent;
}

.map-container {
  position: fixed;  /* ← fixed en vez de absolute */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.fab-set {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--sp-gray-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s;
}

.fab-set:active {
  transform: scale(0.93);
}

.search-results {
  background: white;
  border: 2px solid var(--sp-blue-light);
  border-top: none;
  border-radius: 0 0 20px 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

.search-result-item {
  display: flex;
  flex-direction: column;
  padding: 10px 16px;
  cursor: pointer;
  border-top: 1px solid rgba(139, 215, 255, 0.3);
  transition: background 0.1s;
}

.search-result-item:active {
  background: rgba(139, 215, 255, 0.2);
}

.result-name {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 700;
  color: var(--sp-black);
}

.result-creator {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 600;
  color: var(--sp-gray-text);
}

</style>