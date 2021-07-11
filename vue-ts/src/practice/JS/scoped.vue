<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>作用域和闭包</li>
			<li>
				作用域
				<ul>
					<li>1: 全局作用域</li>
					<li>2： 函数作用域</li>
					<li>3： 块级作用域</li>
					<li>创建10个a 标签， 点击的时候弹出来对应的序号</li>
					<li>
						<button @click="createA">按钮</button>
						<div id="div1"></div>
					</li>
				</ul>
			</li>
			<li>
				自由变量
				<ul>
					<li>一个变量在当前作用域中没有定义，但是却使用了</li>
					<li>然后它会一直向上找</li>
				</ul>
			</li>
			<li>
				闭包的表现
				<ul>
					<li>函数作为参数被传递</li>
					<li>函数作为返回值被返回</li>
					<li>
						函数作为返回值被返回的面试题
						<button @click="testCreate">按钮</button>
					</li>
					<li>
						函数作为参数被传递的面试题
						<button @click="testPrint">按钮</button>
					</li>
					<li>
						闭包： 自由变量的查找，
						是在函数定义的地方，向上级作用域查找，
						不是在执行的地方！！！
					</li>
				</ul>
			</li>
			<li>
				实际开发中闭包的应用
				<ul>
					<li>隐藏数据</li>
					<li>如做一个简单的cache工具</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'typeOf',
	data() {
		return {
			names: '',
		}
	},
	methods: {
		createA() {
			let a
			for (let i = 0; i < 10; i++) {
				a = document.createElement('a')
				a.innerHTML = i + '<br>'
				a.addEventListener('click', function(e) {
					e.preventDefault()
					alert(i)
				})
				let str = document.getElementById('div1')
				str.appendChild(a)
			}
		},
		createfn() {
			const a = 100
			return function() {
				console.log(a)
			}
		},
		testCreate() {
			const fn = this.createfn()
			const a = 200
			fn()
		},
		testPrint() {
			const a = 200
			this.fn()
		},
		fn() {
			const a = 100
			console.log(a)
		},
	},
}
//闭包用于隐藏数据
function createCache() {
	const data = {}
	return {
		set: function(key, val) {
			data[key] = val
		},
		get: function(key) {
			return data[key]
		},
	}
}
 const c = createCache();
 c.set('a',100);
 console.log(c.get('a'));
</script>
<style scoped></style>
