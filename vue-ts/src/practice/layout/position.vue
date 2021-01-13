<template>
    <div>
        <h4>absolute 和  relative  定位</h4>
        <div class="relative">
            <div class="absolute">
                this is absolute
            </div>
        </div>
        <ul>
            <li>relative 是相对于自身的定位</li>
            <li>absolute 往上的第一层定位元素定位</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
body{
    margin: 20px;
}
.relative{
    position: relative;
    width: 400px;
    height: 200px;
    border: 1px solid #ccc;
    top:20px;
    left:50px;
}
.absolute{
    position: absolute;
    width: 200px;
    height: 100px;
    border: 1px solid blue;
    top:20px;
    left:50px;
}

</style>