<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				页面加载过程
				<ul>
					<li>
						从url 到渲染出页面的整个过程
						<ul>
							<li>DNS解析：域名-> IP 地址</li>
							<li>浏览器根据IP地址向服务器发起http 请求</li>
							<li>服务器处理http , 返回给浏览器</li>
							<li>根据html 生成dom tree</li>
							<li>根据css 生成css tree</li>
							<li>将dom tree 和 css tree 整合成 render tree</li>
							<li>根据render tree 渲染页面</li>
							<li>遇到script标签，优先加载js代码， 完成再继续</li>
							<li>直至render tree 渲染完成</li>
						</ul>
					</li>
					<li>
						window.onload 和 DOMContentLoaded 的区别
                        <ul>
                            <li>window.addEventListner('load',function(){
                                // 页面资源全部加载完成了才会执行， 包括图片、视频
                                })</li>
                            <li>
                                document.addEventListener('DOMContentLoaded',function(){
                                    //DOM 渲染即可执行， 此时图片、视频还没有加载完
                                })
                            </li>
                        </ul>
					</li>
					
				</ul>
			</li>
			<li>
				性能优化
				<ul>
					<li>
						减少资源体积，压缩代码，加载更快(加载)
					</li>
					<li>
						减少访问的次数， 代码合并，ssr 服务器端渲染， 缓存(加载)
					</li>
					<li>
						使用更快的网络：CDN , 根据所在区域获取服务器资源(加载)
					</li>

					<li>
						CSS 放在head, js 放在body 最下面（渲染）
					</li>
					<li>
						尽早开始执行JS,用domContentLoaded 触发（渲染）
					</li>
                    <li>
                        懒加载（渲染）
                    </li>
                      <li>
                        对dom查询进行缓存（渲染）
                    </li>
                      <li>
                        减少频繁dom 操作， 合并插入（渲染）
                    </li>
                      <li>
                        节流和防抖（渲染）
                    </li>
				</ul>
			</li>
			<li>
				如何防御xss 攻击
				<ul>
					<li>web 前端攻击方式有哪些？</li>
					<li>xss 跨站攻击</li>
					<li>xsrf 跨站请求伪造</li>
					
				</ul>
			</li>
			<li>
				xss 跨站攻击
				<ul>
					<li>通过执行script获取用户信息<br>
                      <!-- （将 “<” 替换 &lt; ">"替换 &lt; ） -->
                       （或者用npm 工具替换）</li>
				</ul>
			</li>
			<li>
				xsrf 攻击
				<ul>
					<li>
						用户通过点击不明网址，窃取信息
                        （使用post 接口）
                        （增加验证，例如 密码  短信验证码  指纹）
					</li>
				
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
		get() {
			const xhr = new XMLHttpRequest()
			xhr.open('GET', '/data/test.json', false)
			xhr.onreadstatechange = function() {
				if (xhr.readyState === 4) {
					//
					if (xhr.state === 200) {
						alert(xhr.responseText)
					} else {
						console.log('其他情况')
					}
				}
			}
			xhr.send(null)
		},
		post() {
			const xhr = new XMLHttpRequest()
			xhr.open('POST', '/login', false)
			xhr.onreadstatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.state === 200) {
						alert(xhr.responseText)
					} else {
						console.log('其他情况')
					}
				}
			}
			xhr.send(JSON.stringify({ username: '11', password: '123456' }))
		},
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
