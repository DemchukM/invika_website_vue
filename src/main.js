import {createApp} from 'vue'
import App from './App.vue'
import {route} from './routes'
import {createPinia} from 'pinia'
import './index.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .use(vuetify)
    .use(route)
    .use(createPinia())
    .mount('#app')
