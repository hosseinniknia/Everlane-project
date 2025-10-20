import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import ui from '@nuxt/ui/vue-plugin'
import Router from './router/router.js'

const app = createApp(App)

app.use(ui)
app.use(Router)
app.mount('#app')
