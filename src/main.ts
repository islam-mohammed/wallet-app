import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import './style.css'
import App from './App.vue'

createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).mount('#app')
