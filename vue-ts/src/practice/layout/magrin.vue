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
        <div>
            <div style="margin-bottom:10px; height:100px;background-color:red"></div> 
             <div style="margin-top:100px;height:100px;background-color:blue"></div>
        </div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
p {
	font-size: 16px;
	line-height: 1;
	margin-bottom: 15px;
	margin-top: 10px;
}
</style>
