<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>原型和原型链</li>
			<li>
				如何准确判断一个变量是不是数组
				<ul>
					<li>a instanceof Array</li>
				</ul>
			</li>
			<li>
				手写一个简易的jquery,考虑插件和扩展性
				<ul>
					<li>主要用到了class 和 extends</li>
				</ul>
			</li>
			<li>
				隐式原型和显示原型
				<ul>
					<li>每个class都有显示原型prototype</li>
					<li>每个实例都有隐形原型_proto_</li>
					<li>实例的_proto_指向对应class的prototype</li>
				</ul>
			</li>
			<li>
				基于原型的执行规则
				<ul>
					<li>执行属性和方法时，先在自身属性和方法中寻找</li>
					<li>如果找不到则自动去_proto_中查找</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'proto',
	data() {
		return {}
	},
	methods: {},
}
</script>
<style scoped></style>
