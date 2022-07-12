
export function test() {
  let a = 1;
  console.log(a);
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
  //console.log(i); //提示没有定义，因为let 是块作用域 且不能重复定义变量
  //const 是块作用域 且不能修改（是对象时可以修改） 声明时必须赋值
}

export function last() {
  const PI = 3.1415926;
  //PI = 8;
  const a = {
    b: 0
  };
  a.c = 9999;
  console.log(a);
  console.log(PI, a);
}