import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'



import App from './App.vue'


import router from './router'


library.add(faArrowLeftLong, faCircleCheck)


const spa = createApp(App)


spa.use(router)
   .component('font-awesome-icon', FontAwesomeIcon)
   .mount('#app')

