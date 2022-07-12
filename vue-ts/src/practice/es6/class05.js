
export function Main() {

  {
    console.log('B',0B1111110111);
    console.log(0O767);
  }
  {
      //判断是否时有尽的数
     console.log('15',Number.isFinite(15));// 
     console.log('NaN',Number.isFinite(NaN));
     console.log('1/0',Number.isFinite('true'/0));
     //判断是否是数
     console.log('NaN',Number.isNaN(NaN));
     console.log('0',Number.isNaN(0));

    }
    {
        //判断是否是整数
      console.log('25',Number.isInteger(25));
      console.log('25.0',Number.isInteger(25.0));
      console.log('25.1',Number.isInteger(25.1));
      
    }
    {
        //判断是否在安全数之间
        console.log('10',Number.isSafeInteger(10));
        console.log('a',Number.isSafeInteger(a));
    }
    {
        //取整
        console.log(4.1,Math.trunc(4.1));
        console.log(4.9,Math.trunc(4.9));

    }
    {
        //判断是否是正数 0  负数
        console.log('-5',Math.sign(-5));
        console.log('0',Math.sign(0));
        console.log('5',Math.sign(5));

    }
}

