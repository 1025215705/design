
export function Main() {
 { 
     //表示独一无二的值
     let a1= Symbol();
     let b1 = Symbol();
     console.log(a1===a2);
     let a3= Symbol.for('a3');
     let a4=Symbol.for('a4');
     console.log(a3,a4);
 }
 {
    let a1 = Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':466
    };
    console.log('obj',obj);
    //拿不到Symbol属性
    for(let [key,value] of Object.entries(obj)){
        console.log('let of', key,value);
    };
   
    //可以拿到Symbol属性
    Object.getOwnPropertySymbols(obj).forEach((item)=>{
      console.log(item);
    });
   //取所有的属性
    Reflect.ownKeys(obj).forEach((item)=>{
        console.log('ownKeys',item,obj[item]);
    })

 }
}



