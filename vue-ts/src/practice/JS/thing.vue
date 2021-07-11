<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				事件绑定
			</li>
			<li>
               事件冒泡
			</li>
			<li>
				事件代理
			</li>   
		</ul>
	</div>
</template>
<script>
export default {
	name: 'thing',
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
