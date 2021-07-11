<template>
	<div>
		<h4>rem 的弊端</h4>
           <p>rem 具有阶梯型</p>
		<h4>网页视口尺寸</h4>
          <ul>
              <li>window.screen.height  屏幕高度</li>
              <li>window.innerHeight 网页视口高度</li>
              <li>document.body.clientHeight body 高度</li>
          </ul>
           <img :src="imgUrl"> 
		<h4>vw/vh</h4>
        <p>
            vmax 取两者最大值<br>
            vmin 取两者最小值<br>
        </p>
	</div>
</template>
<script>
import imgUrl from "../../assets/pin.png"
export default {
    data(){
        return {
            imgUrl:imgUrl

        }

    }
}
</script>
<style scoped>
</style>
