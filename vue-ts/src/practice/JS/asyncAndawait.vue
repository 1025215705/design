<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				async /await
				<ul>
					<li>解决异步回调 callback hell</li>
					<li>promise then catch 链式调用，但是也是基于回调函数</li>
					<li>async/await 是同步语法， 彻底消灭回调函数</li>
				</ul>
			</li>
			<li>
				async / await 和 promise 的关系
				<ul>
					<li>执行async 函数， 返回的是Promise 对象</li>
					<li>await 相当于 promise 的then</li>
					<li>try...catch 可捕获异常 promise 的catch</li>
				</ul>
			</li>
			<li>
				异步本质还是回调函数
				<ul>
					<li>async /await 是消灭异步回调的终极武器</li>
					<li>js 还是单线程，还是有异步，还得基于eventLoop</li>
					<li>async/await 只是一个语法糖</li>
				</ul>
			</li>
			<li>
				for ... of
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
		loadImg(src) {
			const p = new Promise((resolve, reject) => {
				const img = document.createElement('img')
				img.onload = () => {
					resolve(img)
				}
				img.onerror = () => {
					const err = new Error('图片加载失败')
					reject(err)
				}
				img.src = src
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
function loadImg(src) {
	const p = new Promise((resolve, reject) => {
		const img = document.createElement('img')
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			const err = new Error('图片加载失败')
			reject(err)
		}
		img.src = src
	})
	return p
}
async function loadImg1() {
	const img1 = await loadImg(
		'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=552855857,3211610758&fm=26&gp=0.jpg'
	)
	return img1
}
async function loadImg2() {
	const img2 = await loadImg(
		'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=552855857,3211610758&fm=26&gp=0.jpg'
	)
	return img2
}
!(async function() {
	const img1 = await loadImg1()
	console.log(img1.height, img1.width)
	const img2 = await loadImg2()
	console.log(img2.height, img2.width)
})()
//执行async 函数，获取返回值promise 对象
async function fn1() {
	return 100
}
const res1 = fn1() // 执行async 函数，获取返回值promise 对象
console.log(res1)
//await 相当于 promise then
!(async function() {
	const p1 = Promise.resolve(300)
	const data = await p1
	console.log('data', data)
})()

!(async function() {
		const p1 = 400
		const data1 = await p1
		console.log('data1', data1)
	}
)()

async function fn2() {
	return Promise.resolve(200)
}
!(async function() {
	const data2 = await fn2()
	console.log('data2', data2)
})()
!(async function() {
	const p4 = Promise.reject('err')
	try {
		const res = await p4
		console.log(res)
	} catch (ex) {
		console.error(ex)
	} // try...catch 相当于 promise 的catch
})()
!(async function() {
	const p4 = Promise.reject('err1')
	const res = await p4
	console.log(res)
})
//异步的本质
async function async2() {
	console.log('async2')
}
async function async1() {
	console.log('async1 start')
	await async2() // 先执行async2 ,  await 后面都可以看作是callback 的内容
	// await 后面也可以看作是promise then 里的内容;
	console.log('async1 end')
}

console.log('async start')
async1()
console.log('async end')
//for-of
function muti(num) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(num * num)
		}, 1000)
	})
}
// 3秒后答案一个个出来
!(async function() {
	const nums = [1, 2, 3]
	// 一秒后答案就出来了
	nums.forEach(async (i) => {
		const res = await muti(i)
		console.log(res)
	})
	for (let i of nums) {
		const res = await muti(i)
		console.log(res)
	}
})()
</script>
<style scoped></style>
