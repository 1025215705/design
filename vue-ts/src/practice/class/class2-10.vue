<template>
    <el-collapse v-model="activeNames"
                 @change="handleChange">
        <el-collapse-item title="class2: ['1', '2', '3'].map(parseInt); 输出结果"
                          name="1">
            <div>结果: {{['1', '2', '3'].map(parseInt)}} <br>
                 <el-button @click="class2">查看打印信息</el-button>
            </div>
        </el-collapse-item>
        <el-collapse-item title="什么是防抖和节流？有什么区别？如何实现？"
                          name="2">
            <div>
                防抖：高频率的触发某个事件， 如果在n秒再次被触发， 则重新计算
                <br>
                 <el-button @click="scroll">查看效果</el-button>
               
            </div>
            <div>
                节流： 高频率的触发某个事件下， 稀释掉频率
                <br>
                <el-button @click="resize">查看效果</el-button>
               
            </div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency"
                          name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability"
                          name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
    </el-collapse>
</template>
<script>
export default {
  name: 'Sort',
  data() {
    return {
        activeNames:""
    };
  },
  methods: {	
      handleChange(){

      },
    class2(){
          console.log("class2");
['1', '2', '3'].map(parseInt);
console.log(['1', '2', '3'].map(parseInt));
//['1', '2', '3'].map(parseInt) 这道题主要是考map 和 parseInt 方法
//map
// array.map(callback,[ thisObject]);
// callback的参数也类似：

// [].map(function(value, index, array) {
//     // ...
// });
let data = [1, 2, 3, 4];
let arrayOfSquares = data.map(function (item) {
  return item * item;
});

console.log(arrayOfSquares); // 1, 4, 9, 16
//parseInt 的用法
parseInt('123',5);
console.log(parseInt('123',5));
//将"123"看作5进制的数，返回十进制数 38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
//parseInt('3'2);// 3不能看作2进制的数
//参考网址链接
//https://blog.csdn.net/weixin_41910848/article/details/88538962
//https://www.cnblogs.com/xuan52rock/p/4460949.html
      },
debounce(fn) {
    let timeOut = null; //定时器
    return function () {
        if (timeOut) {
            clearTimeout(timeOut);
        };
        timeOut = setTimeout(()=> {
            fn.apply(this)
        }, 1000);
    }
},
 sayHi() {
    console.log('防抖成功');
  },
scroll(){
window.addEventListener('scroll', this.debounce(this.sayHi));
},
 throttle(fn) {
    let canRun = true;
    return function () {
        if (!canRun) {
            return
        } else {
            canRun = false;
            setTimeout( ()=> {
                fn.apply(this);
                canRun = true;
            }, 1000)
        }
    }
},
              resize(){
                     window.addEventListener('resize', this.throttle(this.sayHi));
                   }

}
}
</script>
<style>
</style>