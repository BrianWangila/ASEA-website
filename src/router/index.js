import { createRouter, createWebHistory } from 'vue-router';

import UserLogin from '../components/UserLogin.vue';
import IntranetPage from '../components/IntranetPage.vue'
import MyData from '../components/MyData.vue'
import DashboardPage from '../components/DashboardPage.vue'
import NotFound from '../components/NotFound.vue'
import ResetPassword from '../components/ResetPassword.vue'


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
    path: '/dashboard',
    component: DashboardPage
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
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;