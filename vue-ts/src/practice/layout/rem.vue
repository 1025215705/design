<template>
    <div>
        <ul>
            <li>px, 绝对长度单位，最常用</li>
            <li>em, 相对于父级单位，相对于父元素，不常用</li>
            <li>rem, 相对于长度单位，相对于根元素，常用于响应式布局</li>
        </ul>
        <div class="div1">
            <p style="font-size:0.1rem">rem 1</p>
            <p style="font-size:0.2rem">rem 1</p>
            <p style="font-size:0.3rem">rem 1</p>
        </div>
        <div  class="div1" style="width:1rem">
             this is div1
        </div>
          <div class="div1" style="width:2rem">
             this is div1
        </div>
          <div class="div1" style="width:3rem">
             this is div1
        </div>
        <h4>响应式布局的常用方案</h4>
        <ul>
            <li>media-query, 根据不同的屏幕宽度设置根元素font-size</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
html{
    font-size: 100px;
}
.div1{
    background-color: #ccc;
    margin-top: 10px;
    font-size: 0.16rem;
}
</style>