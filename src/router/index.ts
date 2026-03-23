import { createRouter, createWebHistory } from '@ionic/vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/splash' },
  { path: '/splash', component: () => import('@/views/SplashPage.vue') },
  { path: '/auth', component: () => import('@/views/AuthPage.vue') },
  { path: '/signup', component: () => import('@/views/SignUpPage.vue') },
  { path: '/login', component: () => import('@/views/LoginPage.vue') },
  {
    path: '/app',
    component: () => import('@/views/TabsPage.vue'),
    children: [
      { path: '', redirect: '/app/map' },
      { path: 'map', component: () => import('@/views/MapPage.vue') },
      { path: 'account', component: () => import('@/views/AccountPage.vue') },
      { path: 'locations', component: () => import('@/views/LocationsPage.vue') },
      { path: 'locations/:id', component: () => import('@/views/LocationDetailPage.vue') },
      { path: 'chats', component: () => import('@/views/ChatsPage.vue') },
      { path: 'chats/:id', component: () => import('@/views/ChatDetailPage.vue') },
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
