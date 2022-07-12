
export function Main() {
  {
    let s ="否";
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));
    console.log('ato',s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));
    //es5 的方法
    let str ='\u{20bb7}abc';
    for(let i=0; i<str.length;i++){
      console.log('es5',str[i]);
    }
    for(let code of str){
      console.log('es6',code);
    }
    //循环字符串
  }
  {
    let str ="string";
    console.log('includes',str.includes('r'));
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('ng'));

  }
  {
    let str = "abc";
    console.log(str.repeat(2));
  }
  {
    let name="list";
    let infor="hello world";
    let m =`i am ${name},${infor}`;
    console.log(m);
    
  }
  {
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
  }
  {
    let user = {
      name:'list',
      infor:"hello word"
    };
    abc `i am ${user.name},${user.infor}`
    console.log(abc `i am ${user.name},${user.infor}`);
    function abc(s,v1,v2){
      console.log(s,v1,v2);
      return s+v1+v2;
    }
  }
  {
    console.log(String.raw`HI\n${1+2}`); //raw 补上转义符
    console.log(`HI\n${1+2}`)
  }
}

