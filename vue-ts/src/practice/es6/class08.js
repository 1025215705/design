
export function Main() {
   //对象扩展
   {
       //简洁表示
       let  o =1;
       let k=2;
       let es5 = {
           o:o,
           k:k
       };
       let es6 ={
           o,
           k
       };
      console.log(es5,es6);
   }
   {
       let a ='b';
       let es5_obj={
           a:'c',
           b:'c'
       }
       let es6_obj={
           [a]:'c'
       }
       console.log(es5_obj,es6_obj);
   }
   {   
       //object.is 和 === 的功能都是一样的
       console.log('字符串',Object.is('abc','abc'), 'abc'==='abc');
       console.log('数组',Object.is([],[]),[]===[]);
       //浅拷贝
       console.log('拷贝',Object.assign({a:'a'},{b:'B'}));
       //
       let test= {key:123, o:234}; //遍历对象
       for(let [key,value] of object.entries(test)){
           console.log(key,value);
       }
   }
   {
       let {a,b,...c} = {a:'test',b:'ccc',c:'ss',d:'ccc'};
    //    c = {
    //        c:'ss',
    //        d:'ccc'
    //    }
       console.log(c);
   }
}



