<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				题目
				<ul>
					<li>1: 手写简易ajax</li>
					<li>2: 跨越的常用的实现方式</li>
				</ul>
			</li>
			<li>
				知识点
				<ul>
					<li>
						xmlHttpRequest
					</li>
					<li>
						状态码
					</li>
					<li>
						同源策略
						<ul>
							<li>
								同源策略： ajax
								请求时，浏览器要求当前网页和server 必须同源
							</li>
							<li>同源：协议、域名、端口、三者必须一致</li>
						</ul>
					</li>
					<li>
						跨域
						<ul>
							<li>加载图片css\js 可无视同源策略</li>
							<li>所有的跨域，都必须经过server 端允许 和配合</li>
						</ul>
					</li>
					<li>
						实现跨域的常见的方式 jsonp 或 cros
						<ul>
							<li>script 链接</li>
							<li @click="jsonp">jsonp 使用</li>
							<li @click="jsonp">服务器设置http header</li>
						</ul>
					</li>
				</ul>
			</li>
			<li>
				描述一下cookie | localStorage | sesionStorage 区别
				<ul>
					<li>cookie</li>
					<li>cookie 本身用于浏览器和服务端通讯</li>
					<li>document.cookie = '' 来修改</li>
					<li>被借用到本地存储来</li>
					<li>大小为4kb</li>
					<li>增加请求的数据量</li>
					<li>localStorage 和 sesionStorage</li>
					<li>大小为5M</li>
					<li>不会随着http 发送</li>
					<li>API简易</li>
					<li>localStorage 永久存储</li>
					<li>sesionStorage 只存在会话</li>
					<li>localStorage 用的多一点</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'ajax',
	data() {
		return {
			names: '',
		}
	},
	methods: {
	
		jsonp() {
			//   $.ajax({
			//     url: 'http://localhost:8882/x-origin.json',
			//     dataType: 'jsonp',
			//     jsonpCallback: 'callback',
			//     success: function (data) {
			//       console.log(data)
			//     },
			//   })
		},
	},
}
</script>
<style scoped></style>
