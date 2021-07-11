<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				题目
				<ul>
					<li>1: http 常用的状态码有哪些</li>
					<li>
						2: http 常见的header 有哪些 (request header 和 response
						header)
					</li>
					<li>3: 什么是restful API</li>
					<li>4: 描述下http的缓存机制</li>
				</ul>
			</li>
			<li>
				request header
				<ul>
					<li>
						Accept 浏览器可接受的数据格式
					</li>
					<li>
						Accept-Encoding 浏览器可接收的压缩算法，如gzip
					</li>
					<li>
						Accept-Languange 浏览器可接受的语言，如 zh-CN
					</li>

					<li>
						Connection ；keep-alive 一次tcp 连接重复使用
					</li>
					<li>
						cookie
					</li>
					<li>
						host
					</li>
					<li>
						User-Agent (简称UA) 浏览器信息
					</li>
					<li>
						Content-type 发送数据的格式，如application/json
					</li>
				</ul>
			</li>
			<li>
				response header
				<ul>
					<li>
						set-Cookie
					</li>
					<li>
						Content-Encoding 返回数据的压缩算法，如gzip
					</li>
					<li>
						Content-length 返回数据大小
					</li>
					<li>
						Content-type 返回数据的格式，如application/json
					</li>
				</ul>
			</li>
			<li>
				http 为何需要缓存
				<ul>
					<li>
						关于缓存的介绍（ 为了不重新请求重复的资源 作用：
						页面加载更快，一般缓存js\css\img）
					</li>
					<li>http 缓存策略（强制缓存和协商缓存）</li>
					<li>刷新操作方式， 对缓存的影响</li>
				</ul>
			</li>
			<li>
				cache-control http 强制缓存
				<ul>
					<li>
						response header 中
					</li>
					<li>
						控制缓存的逻辑
					</li>
					<li>
						max-age 控制时间
					</li>
					<li>
						no-cache 不缓存
					</li>
				</ul>
			</li>
			<li>
				协商缓存
				<ul>
					<li>
						服务器端缓存策略 （ps 作用 ：1 要不要用缓存 2
						是否和服务端的资源一样（资源标识））
					</li>
					<li>
						资源标识<br />
						response head 两种<br />
						last-modified 资源的最后修改时间<br />
						Etag 资源的唯一标识（类似人类的指纹）<br />
					</li>
				</ul>
			</li>
			<li>
				三种刷新操作(不同刷新操作，不同的缓存策略)
				<ul>
					<li>
						正常操作（url
						放浏览器地址栏）：强制缓存有效，协商缓存有效
					</li>
					<li>手动刷新（F5 刷新）：强制缓存失效，协商缓存有效</li>
					<li>强制刷新（ctrl + F5）强制缓存失效，协商缓存有效</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'http',
	data() {
		return {
			names: '',
		}
	},
	methods: {},
}
</script>
<style scoped></style>
