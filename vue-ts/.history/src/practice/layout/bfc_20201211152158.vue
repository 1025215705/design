<template>
	<div>
		<h4>bfc的理解和应用</h4>
		<ul>
			<li>理解： 块级格式化上下文</li>
			<li>触发条件:body根元素</li>
			<li>浮动元素：float 除none 以外的值</li>
			<li>绝对定位元素：position(absolute \ fixed)</li>
			<li>display为inline-block \tabel-cells、 flex</li>
			<li>overflow 除了visible 以外的值</li>
		</ul>
		<h4>同一个BFC下的外边距会发生折叠</h4>
		<div style="display:inline-block">
			<div class="bfc"></div>
			<div class="bfc"></div>
		</div>
		<h4>如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。</h4>
		<div class="container">
			<p class="p1"></p>
		</div>
		<div class="container">
			<p class="p1"></p>
		</div>
		<h4>bfc 可以包含浮动的元素 加上overflow: hidden 变成bfc</h4>
		<div style="border: 1px solid #000; overflow: hidden">
			<div
				style="width: 100px;height: 100px;background: #eee;float: left;"
			></div>
		</div>
		<h4>BFC 可以阻止元素被浮动元素覆盖:在第二个元素加上overflow: hidden</h4>
		<div
			style="height: 100px;width: 100px;float: left;background: lightblue"
		>
			我是一个左浮动的元素
		</div>
		<div style="width: 200px; height: 200px;background: #eee;overflow: hidden">
			我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px;
			height:200px; background: #eee;
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.bfc {
	width: 100px;
	height: 100px;
	background: lightblue;
	margin: 100px;
}
.container {
	overflow: hidden;
}
p {
	width: 100px;
	height: 100px;
	background: lightblue;
	margin: 100px;
}
</style>
