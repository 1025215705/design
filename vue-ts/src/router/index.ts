import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import design from '../practice/design/index.vue'
import class2To10 from '../practice/class/class2To10.vue'
import class11To20 from '../practice/class/class11To20.vue'
import box from '../practice/layout/box.vue'
import magrin from '../practice/layout/magrin.vue'
import bfc from '../practice/layout/bfc.vue'
import flex from '../practice/layout/flex.vue'
import position from '../practice/layout/position.vue'
import center from '../practice/layout/center.vue'
import middle from '../practice/layout/middle.vue'
import rem from '../practice/layout/rem.vue'
import vwvh from '../practice/layout/vwvh.vue'
import typeOf from '../practice/JS/typeOf.vue'
import scoped from '../practice/JS/scoped.vue'
import proto from '../practice/JS/proto.vue'
import this1 from '../practice/JS/this.vue'
import asyn from '../practice/JS/asyn.vue'
import eventLoop from '../practice/JS/eventLoop.vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/design',
		name: 'design',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: design,
	},
	{
		path: '/class/2',
		name: 'class2To10',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: class2To10,
	},
	{
		path: '/class/3',
		name: 'class11To20',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: class11To20,
	},
	{
		path: '/layout/1',
		name: '1',
		component: box,
	},
	{
		path: '/layout/2',
		name: '2',
		component: magrin,
	},
	{
		path: '/layout/3',
		name: '3',
		component: bfc,
	},
	{
		path: '/layout/4',
		name: '4',
		component: flex,
	},
	{
		path: '/layout/5',
		name: '5',
		component: position,
	},
	{
		path: '/layout/6',
		name: '6',
		component: center,
	},
	{
		path: '/layout/7',
		name: '7',
		component: middle,
	},
	{
		path: '/layout/8',
		name: '8',
		component: rem,
	},
	{
		path: '/layout/9',
		name: '9',
		component: vwvh,
	},
	{
		path: '/layout/10',
		name: '10',
		component: typeOf,
	},
	{
		path: '/layout/11',
		name: '11',
		component: proto,
	},
	{
		path: '/layout/12',
		name: '12',
		component: scoped,
	},
	{
		path: '/layout/13',
		name: '13',
		component: this1,
	},
	{
		path: '/layout/14',
		name: '14',
		component: asyn,
	},
	{
		path: '/layout/15',
		name: '15',
		component: eventLoop,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
