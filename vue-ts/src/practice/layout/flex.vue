<template>
	<div>
		<h4>flex 布局</h4>
		<div>
			<ul>
				<li>flex-direction 决定主轴的方向：水平 垂直</li>
				<li>
					justify-content 主轴对齐方式 ，flex-start flex-end center
					space-between space-around
				</li>
				<li>
					align-items: 项目在交叉轴的对齐 flex-start flex-end center
					baseline stretch
				</li>
				<li>order 排列顺序</li>
				<li>flex-grow 项目放大的比例</li>
				<li>flex-shrink 项目缩小的比例</li>
				<li>flex 是 flex-grow 和 flex-shrink 的简写</li>
				<li>align-self 表示不同于其他的对齐方式</li>
			</ul>
            <ul>
                <li>flex 网格布局（平分 flex:1 ）</li>
                <li>百分比布局(百分比 flex:0 0 百分比 ps 百分比表示初始化的大小)</li>
                <li>圣杯布局：两边设置flex:0 0  12em , 中间设置flex:1, 导航放到最左边 order:-1 </li>
                <li>悬挂式布局:主栏的左侧或右侧，需要添加一个图片栏 : 主体部分设置flex为1</li>
                <li>固定的底栏：主体部分设置flex为1</li>
            </ul>
		</div>

		<div>
			一个点骰子的布局
			<div class="box">
				<div class="item"></div>
			</div>
            <div class="box" style="justify-content:center">
				<div class="item"></div>
			</div>
            <div class="box" style="justify-content:flex-end">
				<div class="item"></div>
			</div>
              <div class="box" style="justify-content:flex-start;align-items:center">
				<div class="item"></div>
			</div>
            <div class="box" style="justify-content:center;align-items:center">
				<div class="item"></div>
			</div>
             <div class="box" style="justify-content:flex-end;align-items:center">
				<div class="item"></div>
			</div>
		</div>
		<div>
			三点骰子的布局
			<div class="box">
				<div class="item"></div>
				<div class="item"></div>
				<div class="item"></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.box {
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	border-radius: 10px;
	padding: 20px;
	display: flex;
	justify-content: space-between;
}
.item {
	display: block;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #666;
}
.item:nth-child(2) {
	align-self: center;
}
.item:nth-child(3) {
	align-self: flex-end;
}
</style>
