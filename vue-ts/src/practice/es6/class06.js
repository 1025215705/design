
export function Main() {
    {
        //数据变量转数组
        let arr = Array.of(3, 4, 7, 9, 11);
        console.log('arr', arr);
        let emty = Array.of();
        console.log('empty', emty);
    }
    {
        //将集合转数组
        let p = document.querySelectorAll('p');
        let pArr = Array.from(p);
        console.log(Array.from([1, 3, 5], function (item) {
            return item * 2
        }));
    }
    {
        //数组中所有的元素都替换成7
        console.log('fill-7',[1,'a','b'].fill(7));
        //数组中从下标为1， 替换的长度为3 
        console.log('fill,pos',['a','b','c'].fill(7,1,3));
    }
    {
      //find 只找到第一个
      console.log([1,2,3,4,5,6].find((item)=>{
          return item >3
      }))
      //第一个符合条件的下标
      console.log([1,2,3,4,5,6].findIndex((item)=>{
        return item >3
    }))

    }
    {
        console.log('number',[1,2,NaN].includes(1));
        console.log('number',[1,2,NaN].includes(NaN));
        console.log('number',[1,2,NaN].includes(NaN));

    }

}


