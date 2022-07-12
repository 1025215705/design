
export function Main() {
  {
    console.log("数组结构复制");
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);
    
  }
  {
    
    let a,b,rest;
    [a,b,...rest] = [1,2,4,5,6,7];
    console.log(a,b,rest);
    
  }

  {
    
    let a,b ,c, rest;
    [a,b,c=3] = [1,1];
    console.log(a,b,c);
    
  }
  {
    let a =1 ;
    let b =2 ;
    [a ,b ] = [b,a];
    console.log(a,b);
  }
  {
    function f(){
      return [1,2]
    }
    let a,b
    [a,b] = f();
    console.log(a,b);
  }
  {
    function f(){
      return [1,2,3,4,5,6]
    }
    let a, b, c;
    [a,,,b]=f();
    console.log(a,b);
  }
  {
    function f(){
      return [1,2,3,4,5,6]
    }
    let a, b, c;
    [a,...b]=f();
    console.log(a,b);
  }
  {
    console.log("对象结构复制");
    //let a,b;
    let{a,b} = {a:1,b:1};
    console.log(a,b);
    
  }
  {
    let o = {p:42,q:true};
    let {p,q} = o;
    console.log(p,q);
  }
  {
    let {a=10,b=5} = {a:3};
    console.log(a,b);
  }
  {
    let metaData = {
      title:"abc",
      test:[
        {
          title:'test',
          desc:"des"
        }
      ]
    }
    let {title:esTitle,test:[{title :cnTitle}]} = metaData;
    console.log(cnTitle,esTitle);
  }
}

