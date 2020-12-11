<template>
	<div>
		<h4>margin纵向重叠的问题</h4>
		<p>AAA</p>
        <p></p>
        <p></p>
        <p></p>
        <p>bbb</p>
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
