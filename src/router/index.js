import { createRouter, createWebHistory } from 'vue-router';

//importing components
import UserLogin from '@/components/UserLogin.vue';
import IntranetPage from '@/components/pages/IntranetPage.vue'
import MyData from '@/components/pages/MyData.vue'
import MarketData from '@/components/pages/MarketData.vue'
import Home from '@/components/Home.vue'
import NotFound from '@/components/NotFound.vue'
import ResetPassword from '@/components/pages/ResetPassword.vue'
import MyProfile from '@/components/pages/MyProfile.vue';


// routes
const routes = [
  {
    path: '/login',
    component: UserLogin
  },
  {
    path: '/my-data',
    component: MyData
  },
  {
    path: '/market-data',
    component: MarketData
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/intranet',
    component: IntranetPage
  },
  {
    path: '/reset-password',
    component: ResetPassword
  },
  {
    path: '/my-profile',
    component: MyProfile
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;