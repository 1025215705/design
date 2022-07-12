
export function Main() {
  {
     //decorator 修饰器是一个函数
      //修饰器可以扩展类的行为
      //设置只读修饰器
      let  readonly = function(target, name, descriptor){
         descriptor.writable = false;
         return descriptor
      };

      class Test{
         @readonly
         time(){
           return '2017'
         }
      }
      let test = new Test();
    
  }
  {
    let typeName = function(target,name, descriptor){
      target.myname = 'hello word' //target 指test, myName 是静态方法
    }
    @typeName
    class Test{

    }

  }

  {
    //第三方修饰器js库， core-decorators 
  }

  {
    //埋点
    // let log ={type}=>{
    //   return function(target,name,descriptor){
    //      let src_method = descriptor.value;
    //   }
    // }
  }
}



