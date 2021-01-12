import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Shop from '../views/shop.vue'
import Admin from '../views/adminPanel.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router