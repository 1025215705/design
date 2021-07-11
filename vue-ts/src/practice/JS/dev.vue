<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				git
				<ul>
					<li>1:git log</li>
					<li>
						2: git diff
					</li>
					<li>3: git status</li>
				</ul>
			</li>
			<li>
				chrome 调试 js
				<ul>
					<li>
						Elements
					</li>
					<li>
						Console
					</li>
					<li>
						debbuger
					</li>

					<li>
						network
					</li>
					<li>
						Application
					</li>
				</ul>
			</li>
			<li>
				抓包
				<ul>
					<li>
						fidder 工具抓包
					</li>
					<li>查看网络请求</li>
					<li>网址代理</li>
					<li>http</li>
				</ul>
			</li>
			<li>
				如何配置babel
				<ul>
					<li>
						<p>安装3个插件</p>
						<p>1 babel/core</p>
						<p>2 babel/preset-env</p>
						<p>3 bable-loader</p>
					</li>
					<li>
						创建.babelrc 文件<br />
						<!-- {
                            "presets":[@babel/preset-env]
                        } -->
					</li>
					<li>
						在webpack.config.js
						<!-- module:{
                            rules:[
                            {
                             test:"\.js$"
                             loader:['babel-loader']
                             includer:path.join(_dirname,src),
                             exclude:/node_modules/
                            }
                            ]
                        } -->
					</li>
				</ul>
			</li>
			<li>
				ES6 模块化规范
				<ul>
					<li>
						<p>
							default 和 export 区别
						</p>
						<p>
							default 导出一个对象
						</p>
						<p>
							export 导出可以解构赋值
						</p>
					</li>
				</ul>
			</li>
			<li>
				linux 命令
				<ul>
					<li>ls 查看文件夹</li>
					<li>ls -a  查看隐藏文件夹</li>
					<li>mkdir abc  创建文件夹</li>
					<li>ll 文件夹以列表的形式表现</li>
					<li>ll abc 查看问价内容</li>
					<li>rm -rf abc 递归删除文件夹</li>
                    <li>cd 文件 进入某文件夹里</li>
                    <li>mv index.html index.html文件地址， 将index 文件移动到 另一个文件地址 </li>
                    <li>cp a.js a1.js  复制文件a</li>
                    <li>touch d.js  创建文件 </li>
                      <li>cp a.js a1.js  复制文件a</li>
                    <li>vi d.js 可以编辑d.js</li>
                    <li>grep  "babel" package.json 查找 babel </li>
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
	
	},
}
</script>
<style scoped></style>
