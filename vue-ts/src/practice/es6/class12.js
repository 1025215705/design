
export function Main() {
   {
    class Parent {
        constructor(name="mukeng"){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数',v_parent);
   }


   {
    class Parent {
        constructor(name="mukeng"){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数',v_parent);
 
    class child extends Parent{
       
    }
    console.log("继承", new Child());
   }


   {
       //继承传递参数
    class Parent {
        constructor(name="mukeng"){
            this.name = name;
        }
    }
    let v_parent = new Parent('v');
    console.log('构造函数',v_parent);
 
    class child extends Parent{
        constructor(name='child'){
            super(name); //super必须放到第一行
        }
    }
    console.log("继承", new Child());
   }

   //getter setter
   {
    class Parent {
        constructor(name="mukeng"){
            this.name = name;
        }
        get LongName(){ //读取属性
             return this.name;
        }
        set LongName(value){
            this.name =value;
        }
    }

    let v_parent = new Parent('v');
    console.log('getter',v_parent.LongName);
    v.LongName = 'hello';
    console.log('setter',v_parent.LongName);
   }
   //静态方法
   {
       class Parent{
        constructor(name="mukeng"){
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
       }
   console.log("静态方法", Parent.tell());
   }

   //静态属性 直接在类上定义
   {
    class Parent{
     constructor(name="mukeng"){
         this.name = name;
     }
     static tell(){
         console.log('tell');
     }
    }
    Parent.type = 'test';
    console.log('静态属性',Parent.type);
    console.log('静态属性',Parent.type);
}
}



