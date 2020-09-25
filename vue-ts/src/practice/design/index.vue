<template>
  <div class="sortDiv">
	  <el-button @click="adaptee()">adaptee</el-button>
       <el-button @click="decorator()">decorator</el-button>
        <el-button @click="observer()">observer</el-button>
         <el-button @click="proxy()">proxy</el-button>
          <el-button @click="singletonLogin()">singletonLogin</el-button>
           <el-button @click="userFactory()">userFactory</el-button> 
  </div>
</template>
<script>
import adapteeMain from "./adaptee.ts"
import decoratorMain from "./decorator.ts"
import observerMain from "./observer.ts"
import proxyMain from "./proxy.ts"
import singletonLoginMain from "./singletonLogin.ts"
import userFactoryMain from "./userFactory.ts"
export default {
  name: 'design',
   
  data() {
    return {
    };
  },
  methods: {
     adaptee(){
         adapteeMain();
     },
     decorator(){
        decoratorMain();
     },
     observer(){
        observerMain();
     },
     proxy(){
         proxyMain();
     },
     singletonLogin(){
         singletonLoginMain();
     },
     userFactory(){
         userFactoryMain();
     }
    
  }
};
</script>
<style>


</style>