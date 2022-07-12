
export function Main() {
    {
        //函数参数的默认值 y 后面不能在接其他参数
        function test(x, y = 'word') {
            console.log('默认值', x, y);
        }
        test('hello');
        test('hello', 'kill');
    }
    {
       let x = 'test';
       function test2(x,y=x){
           console.log('作用域',x,y);
       }
       test2('kill');
    }
    {
        //rest的参数 将多个参数转换为数组
        function test3(...arg){
            for(let v of arg){
                console.log('rest',v);
            }
        }
        test3(1,2,3,4,5,6,'a');
    }
    {
        //扩展运算符
       console.log(...[1,2,4]);
       console.log('a',...[1,2,4]);

    }
    {
        //箭头函数
        let arraw = v => v*2;
        console.log('arrow',arrow(3));
    }
    {
        //尾调用（提升性能）
        function tail(x){
            console.log('tail',x);
        }

        function fx(x){
            return tail(x);
            return tail(x);
        }

    }
}



