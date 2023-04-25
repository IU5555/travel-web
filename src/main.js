import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret, fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'


library.add(fas)

const app=createApp(App)
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(AOS)
app.mount('#app')



