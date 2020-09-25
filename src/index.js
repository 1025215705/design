import Vue from 'vue'
import APP from './app.vue'
//import './asset/style/test.css'
import './asset/style/global.css'
import './asset/image/096c340615ae98a4716edab4636a8862.jpg'
//import './asset/image/1.png'
const root = document.createElement("div");
document.body.appendChild(root);

new Vue ({
    render:(h)=>h(APP)
}).$mount(root); 
// 将vue 挂测到 一个 html 元素上