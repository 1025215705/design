<template>
	<div>
		<h4>盒子模型的宽度计算</h4>
		<div class="box"></div>
		<h4>将宽度固定在100px</h4>
		<div class="box2"></div>
		<p>
			box-sizing 是用于告诉浏览器如何计算一个元素是总宽度和总高度<br />
			 <br />
			box-sizing: content-box <br />
			content-box: width = content width; <br />
			height = content height <br />
			 box-sizing: border-box <br />
			border-box: width = border + padding + content width <br />
			heigth = border+ padding + content heigth<br />
		</p>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.box {
	width: 100px;
	padding: 10px;
	border: 1px solid #ccc;
	margin: 10px;
	background-color: blue;
}
.box2 {
	width: 100px;
	padding: 10px;
	border: 1px solid #ccc;
	margin: 10px;
	background-color: red;
	box-sizing: border-box;
}
</style>
