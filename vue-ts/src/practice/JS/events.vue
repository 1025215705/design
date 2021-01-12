<template>
	<div>
		<ul style="list-style-type:none; text-align:left">
			<li>
				题目
				<ul>
					<li>1: 编写一个通用的事件监听函数</li>
					<li>2: 描述事件冒泡的流程
                        <ul>
                            <li> 基于DOM 树形结构</li>
                            <li> 事件会顺着触发元素向上冒泡</li>
                            <li> 应用场景：代理</li>
                        </ul>
                    </li>
					<li>3: 无限下拉的图片列表， 如何监听每个图片的点击
                        <ul>
                            <li> 事件代理</li>
                             <li> 用 e.target 获取触发元素</li>
                              <li> 用matches 来判断触发元素</li>
                        </ul>
                    </li>
				</ul>
			</li>
			<li>
				知识点
				<ul>
					<li>
						事件绑定
						<ul>
							<li>
								<button id="btn1">普通的绑定事件</button>
								<button id="btn2">通用的绑定事件</button>
							</li>
						</ul>
					</li>
					<li>
						事件冒泡
						<ul>
							<li>
								<div id="div1">
									<p id="p1">激活</p>
									<p id="p2">取消</p>
									<p id="p3">取消</p>
								</div>
							</li>
						</ul>
					</li>
					<li>
						事件代理
						<ul>
							<li>
								<div id="div3">
									<a href="#">a1</a><br>
									<a href="#">a2</a><br>
									<a href="#">a3</a><br>
									<a href="#">a4</a><br>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'events',
	data() {
		return {
			names: '',
		}
	},
	methods: {},
}
const btn = document.getElementById('btn1')
btn.addEventListener('click', (event) => {
	console.log('clicked')
})
//通用的事件绑定函数
function bindEvent(ele, type, fn) {
	ele.addEventListener(type, fn)
}
const btn2 = document.getElementById('btn2')
bindEvent(btn2, 'click', (event) => {
	event.preventDefault()
	alert('clicked')
})
//事件冒泡
const p1 = document.getElementById('p1')
const body = document.body
bindEvent(p1, 'click', (event) => {
	event.stopPropagation() //阻止冒泡
	alert('激活')
})
bindEvent(body, 'click', (event) => {
	alert('取消')
})
//事件代理
const div3 = document.getElementById('div3');
bindEvent(div3,"click", event=>{
    event.preventDefault();
    const target = event.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML);
    }
})
</script>
<style scoped></style>
