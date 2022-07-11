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
import promise from '../practice/JS/promise.vue'
import asyncAndawait from '../practice/JS/asyncAndawait.vue'
import task from '../practice/JS/task.vue'
import dom from '../practice/JS/dom.vue'
import events from '../practice/JS/events.vue'
import ajax from '../practice/JS/ajax.vue'
import http from '../practice/JS/http.vue'
import dev from '../practice/JS/dev.vue'
import pro from '../practice/JS/pro.vue'
import es6 from '../practice/es6/index.vue'
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
		path: '/js/10',
		name: '10',
		component: typeOf,
	},
	{
		path: '/js/11',
		name: '11',
		component: proto,
	},
	{
		path: '/js/12',
		name: '12',
		component: scoped,
	},
	{
		path: '/js/13',
		name: '13',
		component: this1,
	},
	{
		path: '/js/14',
		name: '14',
		component: asyn,
	},
	{
		path: '/js/15',
		name: '15',
		component: eventLoop,
	},
	{
		path: '/js/16',
		name: '16',
		component: promise,
	},
	{
		path: '/js/17',
		name: '17',
		component: asyncAndawait,
	},
	{
		path: '/js/18',
		name: '18',
		component: task,
	},
	{
		path: '/js/19',
		name: '19',
		component: dom,
	},
	{
		path: '/js/20',
		name: '20',
		component: events,
	},
	{
		path: '/js/21',
		name: '21',
		component: ajax,
	},
	{
		path: '/js/22',
		name: '22',
		component: http,
	},
	{
		path: '/js/23',
		name: '23',
		component: dev,
    },
    {
		path: '/js/24',
		name: '24',
		component: pro,
	},
	{
		path:'/es6',
		name:"es6",
		component:es6
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})
export default router
