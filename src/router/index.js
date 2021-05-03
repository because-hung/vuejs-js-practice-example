import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Food from '../components/Food.vue'
import Hotel from '../components/Hotel.vue'
import Sweet from '../components/Sweet.vue'
import Todolist from '../components/Todolist.vue'
import Youtube from '../components/Youtube.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/KHhotel',
    name: 'Hotel',
    component: Hotel
  },
  {
    path: '/dessert',
    name: 'dessert',
    component: Sweet
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: Todolist
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: Youtube
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
