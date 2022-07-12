<template>
  <div>
    文字镂空
  <div class="boxTxt">
   文字镂空
  </div>
  阴影效果
  <div class="boxTxt2">

  </div>
    <!-- <img :src="imgUrl" class="image" /> -->
      图片
    <div class="image">
      
        <div class="boxTxt2">

  </div>
      
    </div>
  </div>
</template>

<script>
import imgUrl from "../assets/back.png";
export default {
  name: "demo",
  data() {
    return {
      imgUrl: imgUrl,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.boxTxt {
  width: 200px;
  height: 200px;
  line-height: 200px;
  background-color: aqua;
  text-align: center;
  -webkit-text-stroke: 1px red;
  color: transparent;
  font-size: 40px;
}
.boxTxt2 {
  margin-top: 200px;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  box-shadow: 1px 1px 0 2000px transparent, 1px 1px 0px 50px red;
}
.image {
   margin-top: 100px;
  width: 1000px;
  height: 1000px;
  background: url('../assets/back.png') center center no-repeat;
  background-size: 100% 100%;
}
</style>
