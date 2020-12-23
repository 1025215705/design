<template>
	<div>
		<h4>水平居中</h4>
		<ul>
			<li>inline 元素： text-align:center</li>
			<li>block 元素： margin:auto</li>
			<li>absolute 元素： left:50%+margin-left 负值</li>
		</ul>
	
		<hr />
		<div>
			<div class="container container-1">
				<span>一段文字</span>
			</div>
			<div class="container container-2">
				<div class="item">
					this is block item
				</div>
			</div>
			<div class="container container-3">
				<div class="item">
					this is absolute item
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.container {
	border: 1px solid #ccc;
	margin: 10px;
	padding: 10px;
}
.item {
	background-color: #ccc;
}
.container-1 {
	text-align: center;
}
.container-2 .item {
	width: 500px;
	margin: auto;
}
.container-3 {
	position: relative;
	height: 100px;
}
.container-3 .item {
	width: 300px;
	height: 100px;
	position: absolute;
	left: 50%; /* 移动父元素的50% */
    margin-left: -150px; /*  宽度的一半 */
     
}
</style>
