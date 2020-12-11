<template>
	<div>
		<h4>margin纵向重叠的问题</h4>
		<p>AAA</p>
		<p>bbb</p>
		<div>
			<ul>
				<li>1: 空白的p 会忽略</li>
				<li>2： 相邻的magrin 会发生重叠</li>
			</ul>
		</div>
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
p {
	font-size: 16px;
	line-height: 1;
	margin-bottom: 15px;
	margin-top: 10px;
}
</style>
