<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				promise
				<ul>
					<li>三种状态</li>
					<li>状态的表现和变化</li>
					<li>then 和 catch 对状态的影响</li>
				</ul>
			</li>
			<li>
				三种状态
				<ul>
					<li @click="pending">
						pending 状态: 不会触发then 和 catch
					</li>
					<li @click="resolve">
						resolve 状态: 会触发后续的then 和 catch
					</li>
					<li @click="reject">
						reject 状态： 会触发后续的catch 回调函数
					</li>
				</ul>
			</li>
			<li>
				then 和 catch 改变状态
				<ul>
					<li @click="resolveChange">
						then 正常返回 resolved , 里面有报错则返回rejected
					</li>
					<li @click="rejectChange">
						catch 正常返回 resolve , 里面有报错则返回rejected
					</li>
				</ul>
			</li>
			<li>
				面试题
				<ul>
					<li @click="one">第一题</li>
					<li @click="two">第二题</li>
					<li @click="three">第三题</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'promise',
	data() {
		return {
			url: '',
		}
	},
	methods: {
		rejectStatus() {
			const p1 = Promise.resolve(100)
			p1.then((data) => {
				console.log('data', data)
			}).catch((err) => {
				console.log('err', err)
			})
		},
		resolveStatus() {
			const p2 = Promise.reject('err')
			p2.then((res) => {
				console.log('data2', res)
			}).catch((res) => {
				console.log('error2', res)
			})
		},
		resolveChange() {
			const p1 = Promise.resolve().then(() => {
				return 100
			})
			console.log('p1', p1)
			p1.then(() => {
				console.log('123')
			})
			console.log('p1', p1)
		},
		rejectChange() {
			const p2 = Promise.resolve().then(() => {
				throw new Error('then error')
			})
			p2.then(() => {
				console.log('456')
			}).catch((error) => {
				console.log('error', error)
			})
			const p3 = Promise.reject('my error').catch((err) => {
				console.error(err)
			})
			console.log('p3', p3) // resolved 注意
			p3.then(() => {
				console.log(100)
			})
			const p4 = Promise.reject('my error').catch((err) => {
				throw new Error('catch err')
			})
			console.log('p4', p4)
			p4.then(() => {
				console.log(200)
			}).catch(() => {
				console.log('error')
			}) // resolved 状态
		},
		pending() {
			const p1 = new Promise((resolve, reject) => {
				console.log('resolve', resolve)
				console.log('reject', reject)
			})
			console.log('p1', p1)
		},
		resolve() {
			const p2 = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve()
				})
			})
			console.log('p2', p2)
			setTimeout(() => {
				console.log('setTimeout', p2)
			})
		},
		reject() {
			const p3 = new Promise((resolve, reject) => {
				setTimeout(() => {
					reject()
				})
			})
			console.log('p3', p3)
			setTimeout(() => {
				console.log('setTimeout', p3)
			})
		},
		one() {
			Promise.resolve()
				.then(() => {
					console.log(1)
				})
				.catch(() => {
					console.log(2)
				})
				.then(() => {
					console.log(3)
				})
		},
		two() {
			Promise.resolve()
				.then(() => {
					console.log(1)
					throw new Error('error1')
				})
				.catch(() => {
					console.log(2)
				})
				.then(() => {
					console.log(3)
				})
        },
        three(){
          Promise.resolve().then(()=>{
             console.log(1);
             throw new Error("erro1");
          }).catch(()=>{
           console.log(2)
          }).catch(()=>{
           console.log(3);
          });
        },
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
</script>
<style scoped></style>
