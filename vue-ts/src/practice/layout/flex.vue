<template>
	<div>
		<h4>flex 布局</h4>
        三点骰子的布局
        <div class="box">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped>
.box{
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.item{
    display: block;
    width:40px;
    height: 40px;
    border-radius: 50%;
    background-color: #666;
}
.item:nth-child(2){
    align-self: center;
}
.item:nth-child(3){
    align-self: flex-end;
}
</style>
