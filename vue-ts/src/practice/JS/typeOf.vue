<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>type of 能判断哪些类型</li>
			<li>
				<ul>
					<li>1: 判断值得类型</li>
					<li>2: 判断是否是引用类型, null 也是一种引用类型</li>
					<li>3: 判断函数</li>
				</ul>
			</li>
			<li>手写深拷贝</li>
			<li>
				<ul>
					<li>JSON.pasre(JSON.stringify(a))</li>
					<li>lodash第三方库</li>
				</ul>
			</li>
			<li>除了 == null 之外， 其他一律用===</li>
			<li>
				注意类型转换的坑
				<ul>
					<li @click="getResult">const a =100+10;</li>
					<li @click="getResult1">const b =100+'10'</li>
					<li @click="getResult2">const c =true + '10'</li>
				</ul>
			</li>
			<li>
				== 运算符
				<ul>
					<li @click="getResult3">100=='100'</li>
					<li @click="getResult4">0==''</li>
					<li @click="getResult5">0 == false</li>
					<li @click="getResult6">false == ''</li>
					<li @click="getResult7">null == undefined</li>
				</ul>
			</li>
		</ul>
		<!-- <button></button> -->
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
		deepClone(obj = {}) {
			if (typeof obj !== 'object' || obj == null) {
				return obj
			}
			//初始化返回结果
			let result
			if (obj instanceof Array) {
				result = []
			} else {
				result = {}
			}
			for (let key in obj) {
				//保证key 不是原型的属性
				if (obj.hasOwnPropery(key)) {
					result[key] = this.deepClone(obj[key])
				}
			}
			return result
		},
		getResult() {
			const a = 100 + 10
			console.log('100+10=' + a)
		},
		getResult1() {
			const b = 100 + '10'
			console.log("100+'10'=" + b)
		},
		getResult2() {
			const c = true + '10'
			console.log("true + '10'=" + c)
		},
		getResult3() {
			console.log("100 == '100'", 100 == '100')
		},
		getResult4() {
			console.log("0==''", 0 == '')
		},
		getResult5() {
			console.log('0 == false', 0 == false)
		},
		getResult6() {
			console.log("false == ''", false == '')
		},
		getResult7() {
			console.log('null == undefined', null == undefined)
		},
	},
}
</script>
<style scoped></style>
