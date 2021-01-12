<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				DOM的本质是什么
				<ul>
					<li>DOM是哪种数据结构
                        (树)
                    </li>
					<li>DOM 操作的常用API</li>
					<li>attr 和 property 的区别</li>
                    <li>一次性插入多个DOM 节点，考虑性能</li>
				</ul>
			</li>
			<li>
                DOM 本质是HTML文件解析后的结构树
			</li>
			<li>
				attr 和 property 的区别
				<ul>
					<li>property：修改对象属性， 不会体现到html结构中</li>
					<li>attribute:修改html 属性， 会改变html结构</li>
                    <li>两者都有可能引起DOM重复渲染</li>
                    <li>建议一般用property</li>
				</ul>
			</li>
            	<li>
				DOM 性能
				<ul>
					<li>DOM操作非常昂贵， 避免频繁的DOM操作</li>
					<li>对 DOM 查询做缓存</li>
                    <li>将频繁的操作改为一次性的操作</li>
				</ul>
			</li>
            <li>
				BOM 操作（浏览器操作）
				<ul>
					<li>如何识别浏览器类型
                      <ul>
                          <li>navigator 浏览器信息<br>
                              navigator.userAgent 获取浏览器信息
                          </li>
                          <li>screen 屏幕 <br>
                              screen.width<br>
                              screen.heigth<br>
                          </li>
                          <li>location 地址<br>
                              location.href 网址<br>
                              location.protocol 协议<br>
                              location.host 域名<br>
                              location.search 查询参数<br>
                              location.hash # 后面的内容<br>
                              location.pathname 路径<br>
                          </li>
                          <li>history 历史</li>
                      </ul>
                    </li>
					<li>分析拆解url各个部分</li>
				</ul>
			</li>
            
		</ul>
	</div>
</template>
<script>
export default {
	name: 'asyn',
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
