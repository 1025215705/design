<template>
	<div>
		<h4>垂直居中</h4>
		<ul>
			<li>
				inline 元素： line-height 的值等于height 值
			</li>
			<li>
				absolute 元素： top:50% + margin-top 负值
			</li>
			<li>
				absolute 元素： transform(-50%,-50%)
			</li>
			<li>
				absolute 元素： top 、 left 、bottom 、right =0 margin:auto
			</li>
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
            <div class="container container-4">
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
    height: 200px;
}
.item {
	background-color: #ccc;
    
}
.container-1 {
	text-align: center;
    height: 200px;
    line-height: 200px;
}
.container-2{
    position: relative;
	height: 200px;
}
.container-2 .item {
    position:absolute;
    width: 500px;
    height: 100px;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%); /** css3 的属性 长度可以不固定 */
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
    top:50%; /* */
    margin-top: -50px; /*高度的一半 缺点必须知道长度 */
}
.container-4{
    position:relative;
    height: 200px;
}
.container-4 .item {
	width: 300px;
	height: 100px;
	position: absolute;
	left: 0; /* 移动父元素的50% */
    top:0; /* */
    right:0;
    bottom:0;
    margin: auto;
}
</style>
