import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/crud',
      name: 'Crud',
      component: () => import('../views/CrudView.vue')
    }
  ]
})


export default router
