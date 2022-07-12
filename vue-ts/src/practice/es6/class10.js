
export function Main() {
 {
 //set 数据不能重复
 //Map 数据可以重复
 //优先使用map, 保证唯一性，使用set
 let list = new Set();
 list.add(5);
 list.add(7);
 }
 {
     let arr = [1,2,3,4,5];
     let list = new Set(arr);
     console.log('size',list.size);
      
 }
 {  
     //元素只能是对象;
     let Set = new WeakSet();
    
 }
 {
     //数组转set 去重
     let arr = [1,2,3,4,5];
     let list2 = new Set(arr);
     console.log('uniapp',list2);
      
  }
 {
     let map = new Map();
     //key 可以是对象;
     let weakmap = new WeakMap();
     
 }
  
}



