import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Shop from '../views/shop.vue'


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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router