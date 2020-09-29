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
        <el-collapse-item title="介绍下 Set、Map、WeakSet 和 WeakMap 的区别？"
                          name="3">
            <div>set 是一种集合的数据结构， map 是以一种字典的数据结构</div>
            <div>set 的详细的解析： 1：唯一不重复的， 没有顺序
                <br>
                <el-button @click="set">查看效果</el-button>
            </div>
            <div>map 的详细解析
                <br>
                <el-button @click="map">查看效果</el-button>
            </div>
        </el-collapse-item>
        <el-collapse-item title="请分别介绍它们之间的区别和优劣(Object.prototype.toString.call() 、 instanceof 以及 Array.isArray())"
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
      handleChange(val) {
        console.log(val);
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
        }
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
                   },
                   set(){
//demo
const s = new Set();
[1,2,3,4,3,2,1].forEach(x=>s.add(x));
for(let i of s){
    console.log(i);
}
console.log("set 的长度", s.size);
// 去重数组里的重复的对象
let arr = [1,2,2,33,3,3,1,1];
console.log([...new Set(arr)]);
//Set 对象允许你储存任何类型的唯一值，无论是原始值或者是对象引用。
//向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
//Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，
//它类似于精确相等运算符（===），主要的区别是**NaN等于自身，
//而精确相等运算符认为NaN不等于自身

//set的实例方法
 let set1 = new Set();
 console.log(set1.add(1).add(2).add(1));
 console.log(set1.has(1));
 console.log(set1.has(3));
 console.log(set1.delete(1));
 console.log(set1.has(1));
 set1.clear()//清空
 console.log(set1);
// set 转 数组
  const items = new Set([1,2,3,4]);
  const array = Array.from(items);
  console.log(array);
  //或
  const arr1 = [... items];
  console.log(arr1);
  //遍历方法
  let set = new Set([1,2,3]);
  console.log("keys",set.keys);
  console.log("values",set.values);
  console.log("entries",set.entries);
  console.log("keys")
  for(let item of set.keys()){
      console.log(item);
  }
  console.log("values")
  for(let item of set.values()){
       console.log(item);
  }
   console.log("entries")
 for(let item of set.entries()){
     console.log(item);
 }
 set.forEach((value,key)=>{
     console.log(key+':'+value)
 })
 //set 可以使用map 和 filter 方法
  let sett = new Set([1,2,3])
  sett = new Set([...sett].map(item=>item*2));
  console.log(sett);
  sett = new Set(...[sett].filter(item=>item>=4));
  console.log(sett); 
},



map(){
  const m = new Map();
  const o = {p:'haha'};
  m.set(o,'content');
  console.log(m.get(o));
  console.log(m.has(o));
  console.log(m.delete(o));
  console.log(m.has(o));
  //任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
  const set = new Set([
      ['foot',1],
      ['bar',2]
  ]);
  const m1 = new Map(set);
  m1.get('foot');
  console.log(m1.get('foot'));
  const m2 = new Map([['bar', 3]]);
  const m3 = new Map(m2);
  m3.get('baz');
  
  //注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
  let m4 = new Map();
  m4.set(['a'],555);
  console.log(m4.get(['a'])); 
  //map 的属性和方法
  const map = new Map([
      ['name','An'],
      ['des','JS']
  ]);
  console.log("map 的长度",map.size);
  console.log(map.entries());
  console.log(map.keys());
  // map 转 Array
  const m6 = new Map([[1,1],[2,2],[3,3]]);
  console.log([...map]);
  // Array 转 map
  const m7 = new Map([[1,1],[2,2],[3,3]]);
  console.log(m7);
  //map 转 object
  function mapToObj(map){
    let o = {};
    map.forEach(ele=>{
        o[ele.key] = ele.value;
    });
    return o;
  }
 const mapp = new Map().set('name','An').set('des','js');
 console.log(mapToObj(mapp));
 //object 转 map
  function objToMap(obj){
     let map = new Map();
     for(let key of Object.keys(obj)){
         map.set(key,obj[key]);
     }
     return map;
  }
  console.log(objToMap({'name':'An','des':'Js'}));
  //Map 转 json 
  function mapToJson(map){
      return JSON.stringify([...map]);
  }
  let m8 = new Map().set('name','An').set('des','js');
  console.log(mapToJson(m8));
  //json 转 map
  function jsonToStrMap(jsonStr){
      return objToMap(JSON.parse(jsonStr));
  }
  console.log(jsonToStrMap('{"name":"An","des":"JS"}'))
}

}

}
</script>
<style>
</style>