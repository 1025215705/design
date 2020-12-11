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
			<p></p>
		</div>
		<div class="container">
			<p></p>
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
</style>
