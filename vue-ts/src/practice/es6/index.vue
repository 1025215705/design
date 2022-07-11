<template>
  <div class="sortDiv">
es旅行开始了
  </div>
</template>
<script>
import { test, last } from "./class01.js";
import { Main } from "./class02.js";
export default {
  name: "es6",

  data() {
    return {};
  },
  mounted() {
    console.log("es旅行开始了");
    test();
    last();
    Main();
    console.log("es旅行结束了");
  },
  methods: {}
};
</script>
<style>
</style>