import './assets/input.css'
import './assets/main.css'
import 'boxicons'


import { createApp } from 'vue'
import router from './router'
import LoginView from '@/views/LoginView.vue'


const app = createApp(LoginView)

app.use(router)

app.mount('#app')
