import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import UserView from '@/views/UserView.vue'
import EmployeeView from '@/views/EmployeeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path:'/Dashboard',
      name:'Dashboard',
      component:DashboardView
    },
    {
      path:'/User',
      name:'User',
      component:UserView
    },
    {
      path:'/Employee',
      name:'Employee',
      component:EmployeeView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
