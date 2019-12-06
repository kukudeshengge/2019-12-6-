import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/One.vue';
import Two from '../views/Two.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/one'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'one',
        name: 'one',
        component: One
      },
      {
        path: 'two',
        name: 'two',
        component: Two
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
