<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				this的赋值情况（this取什么样的值是在执行的时候确定的，
				不是在定义的时候确定的）
				<ul>
					<li>作为普通函数(返回window)</li>
					<li>使用 call apply bind(传入什么返回什么)</li>
					<li>作为对象方法被调用(返回对象本身)</li>
					<li>在class方法中被调用(实例本身)</li>
					<li>箭头函数(找它上级作用域的值)</li>
				</ul>
			</li>
			<li>
				手写bind函数
			</li>
			
		</ul>
	</div>
</template>
<script>
export default {
	name: 'this',
	data() {
		return {
			names: '',
		}
	},
	methods: {
		fn1() {
			console.log(this)
		},
		thisCall() {
			// this.fn1();
			// this.fn1.call({x:100});
			// const fn2 = this.fn1.bind({x:200});
			// this.fn2();
		},
	},
}
//手写bind1
Function.prototype.bind1 = function() {
	//将参数解析为数组
	//const args = Array.prototype.slice.call(arguments);
	//获取this (取出数组的第一项，数组剩余的就是传递参数)
	//const t = args.shift();
	//const self = this; // 当前函数
	//返回一个函数
	// return function() {
	// 	return self.apply(t, args)
	// }
}

</script>
<style scoped></style>
