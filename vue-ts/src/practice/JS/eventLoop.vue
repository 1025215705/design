<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				event loop (事件循环/事件轮询)
				<ul>
					<li>JS是单线程运行的</li>
					<li>异步基于回调来实现的</li>
					<li>event loop 就是异步回调的实现原理</li>
				</ul>
			</li>
			<li>
				JS 如何执行
				<ul>
					<li>从前到后， 一行一行的执行</li>
					<li>如果某一行报错，则停止下面的代码的执行</li>
					<li>先把同步代码执行完，再执行异步</li>
				</ul>
			</li>
			<li> 
				event loop 过程
				<ul>
					<li> browser console| call stack (执行栈)| web APIs （记录网络 定时器）| Eevent Loop(永动机) | callback Queue </li>
					<li> 同步代码放在call stack 执行 </li>
					<li> 遇到异步，会先记录一下，等待时机（网络、定时器） </li>
					<li> 时机到了，就移动到callback Queue  </li>
					<li> 如果call stack 为空， 同步代码执行完，event Loop 开始工作 </li>
					<li> 轮询查找callback Queue, 如有移动到call stack 执行（event loop 的作用） </li>
                    <li> 然后继续轮询查找（永动机一样） </li>
				</ul>
				
			</li>
			<li> 
				event loop 和 DOM 事件
				<ul>
					<li>js 是单线程</li>
					<li>异步（setTimeout, ajax）使用回调，基于event loop</li>
					<li>DoM 事件也是基于回调， 基于event loop</li>
				</ul>
				
			</li>
		</ul>
        <img :src="imgUrl">
	</div>
</template>
<script>
import imgUrl from "../../assets/eventLoop.png"
export default {
	data() {
		return {
			imgUrl: imgUrl,
		}
	},
}
</script>
<style scoped></style>
