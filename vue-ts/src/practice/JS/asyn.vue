<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				同步和异步的区别是什么
				<ul>
					<li>同步只能做一件事情</li>
					<li>JS和DOM 渲染共用一个线程,因为JS可以修改DOM结构</li>
					<li>基于JS是单线程语言</li>
					<li>异步不会阻塞代码执行</li>
					<li>同步会阻塞代码执行</li>
				</ul>
			</li>
			<li>
				异步的应用场景
				<ul>
					<li>网络请求，如ajax 图片加载</li>
					<li>定时任务，如setTimeout</li>
				</ul>
			</li>
			<li>
				promise 图片加载
				<button @click="loadingImg()">加载图片</button>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'asyn',
	data() {
		return {
			url:
				'https://ss1.bdstatic.com/770cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3680606960,866355165&fm=26&gp=0.jpg',
		}
	},
	methods: {
		loadImg(src) {
			const p = new Promise((resolve, reject) => {
                const img = document.createElement('img');
				img.onload = () => {
					resolve(img)
				}
				img.onerror = () => {
					const err = new Error('图片加载失败')
                    reject(err)
                }
                img.src = src;
			})
			return p
		},
		loadingImg() {
			this.loadImg(this.url)
				.then((img) => {
					console.log(img.width)
					return img
				})
				.then((img) => {
					console.log(img.height)
				})
				.catch((ex) => {
					console.error(ex)
				})
		},
	},
}
</script>
<style scoped></style>
