import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import design from "../practice/design/index.vue"
import class2To10 from "../practice/class/class2To10.vue"
import  class11To20 from "../practice/class/class11To20.vue"
import box from "../practice/layout/box.vue";
import magrin from "../practice/layout/magrin.vue";
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/design',
    name: 'design',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: design
  },
  {
    path: '/class/2',
    name: 'class2To10',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: class2To10
  },
  {
    path: '/class/3',
    name: 'class11To20',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: class11To20
  },
  {
      path:"/layout/1",
      name:"1",
      component: box
  },
  {
    path:"/layout/2",
    name:"1",
    component: magrin
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
