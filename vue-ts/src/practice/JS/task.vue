<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				什么是宏任务和微任务
				<ul>
					<li>宏任务：setTimeout, setInterval, Ajax, dom 事件</li>
					<li>微任务：promise , async /await</li>
					<li>微任务执行时机要比宏任务要早</li>
				</ul>
			</li>
			<li>
				event loop 和DOM 渲染(微任务执行要比宏任务要早的原因)
				<ul>
					<li>
						每次call stack
						清空（即每次轮询结束），即同步任务执行完成
					</li>
					<li>
						（微任务是在dom渲染之前执行）都是DOM 重新渲染的机会，dom
						结构如果有改变则重新渲染
					</li>
					<li>然后再去触发下一次Event Loop</li>
				</ul>
			</li>
			<li>
				为什么微任务执行要比宏任务要早（demo）
				<ul>
					<li @click="min">
						微任务: DOM 渲染前触发，如promise
					</li>
					<li @click="max">
						宏任务: DOM 渲染后触发，如setTimeout
					</li>
					<li>
						<div id="container"></div>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'asyncAndawait',
	data() {
		return {
			url: '',
		}
	},
	methods: {
		min() {
			const p1 = '<p>一段文字</p>'
			const p2 = '<p>一段文字</p>'
			const p3 = '<p>一段文字</p>'
			this.$refs('container')
				.append(p1)
				.append(p2)
				.append(p3)
			//微任务：dom 渲染前触发
			Promise.resolve().then(() => {
				console.log('length', this.$refs('container').children().length)
				alert('promise')
			})
		},
		max() {
			// const $p1 = $('<p>一段文字</p>')
			// const $p2 = $('<p>一段文字</p>')
			// const $p3 = $('<p>一段文字</p>')
			// $('#container')
			// 	.append($p1)
			// 	.append($p2)
			// 	.append($p3)
			// //宏任务：dom 渲染前触发
			// setTimeout(() => {
			// 	console.log('length', $('#container').children().length)
			// 	alert('setTimeout')
			// })
		},
	},
}
console.log(100)
setTimeout(() => {
	console.log(200)
})
Promise.resolve().then(() => {
	console.log(300)
})
console.log(400)
</script>
<style scoped></style>
