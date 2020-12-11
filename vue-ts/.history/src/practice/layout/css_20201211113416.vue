<template>
<div>
    <h4>盒子模型的宽度计算</h4>
    <div class="box">
    
    </div>
     <h4>将宽度固定在100px</h4>
    <div class="box2">
    
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width:100px;
    padding:10px;
    border:1px solid #ccc;
    margin:10px;
    background-color: blue;
}
.box{
    width:100px;
    padding:10px;
    border:1px solid #ccc;
    margin:10px;
    background-color: red;
    box-sizing: border-box;
}
</style>