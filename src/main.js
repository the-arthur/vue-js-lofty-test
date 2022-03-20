import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vClickOutside from "click-outside-vue3"

createApp(App).use(vClickOutside).use(VueAxios, axios).mount('#app')
