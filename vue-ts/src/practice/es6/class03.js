
export function Main() {
  {
   let regex = new RegExp('xyz','i');
   let regex2 =  new RegExp(/xyz/i);
   console.log(regex.test('xyz123'), regex2.test('xzy123'));
   //es5 的写法  
   let regex3 = new RegExp(/xyz/ig,'i');
   console.log(regex3.flags)// 打印修饰符
  }
  {
    let s = 'bbb_bb_b';
    let a1 = /b+/g; //全局修饰符， 直到匹配到
    let a2 = /b+/y; //全局修饰符， 一开始必须匹配到
    console.log("one", a1.exec(s), a2.exec(s));
    console.log("two",a1.exec(s),a2.exec(s));
   //exec 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
   //exec 对象表示正则表达式，它是对字符串执行模式匹配的强大工具。
    
  }

  {
   console.log('u-1',/^\uD83D/.test('\uD83D\uDc2A'));
   Console.log('U-2',/^\uD83D/u.test('\uD83D\uDC2A'));

   console.log(/\u{61}/.test('a'));
   console.log(/\u{61}/u.test('a'));
   console.log('\u{20bb7}');//{} 不是unicode 编码，用{}把unicode 编码包起来
   let s="否";
   console.log('u',/^.$/.test(s));
   console.log('u-2',/^.$/u.test(s));

   console.log("test",/否{2}/.test('否否'));
   console.log("test",/否{2}/u.test('否否'));

    
  }
  
}

