
export function Main() {
  {
    //genertaor 基本定义
    let tell = function () {
      yield 'a'
      yield 'b'
      return 'c'
    }

    let k = tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
  }
  {
    let state = function* () {
      while (1) {
        yield 'a';
        yield 'b';
        yield 'c';
      }
    }
    let status = state();
    console.log(state.next());
    console.log(state.next());
    console.log(state.next());
    console.log(state.next());
  }
  {
    let state = async function () {
      while (1) {
        await 'a';
        await 'b';
        await 'c';
      }
    }
    let status = state();
    console.log(state.next());
    console.log(state.next());
    console.log(state.next());
    console.log(state.next());
  }
  {
    //抽奖
    let draw = function (count) {
      //具体抽奖逻辑
      console.log(剩余 + `${count}` + 次);
    }
    let residue = async function (count) {
      while (count > 0) {
        count--;
        await draw(count);
      }
    }
  }
  {
    //长轮询
    let ajax = async function (){
       await new Promise(function(resolve, reject){
         setTimeout(() => {
            resolve({code:0});
         }, 2000);
       })
    };
     
    let pull =function (){
       let query = ajax();
       let step = query.next();
       step.value.then(function(d){
          if(d.code !=0){
            setTimeout(() => {
              console.log('wait');
              pull();
            }, 1000);
          }else{
             console.info(d);
          }
       })
    };
    pull();
    pull();
  }
}



