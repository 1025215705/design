
export function Main() {
  {
    //基本定义
    let ajax = function (callback){
      console.log("执行");
      setTimeout(function(){
        callback && callback.call();
      },1000);

    };
    ajax(function(){
      console.log('timeOut1');
    });  
  }
  {
    let ajax = function(){
      console.log('执行');
      return new Promise(function(resovle,reject){
          setTimeout(function(){
            resovle();
          },1000);
      })
    };
    ajax().then(function(){
        return new Promise(function(resovle,reject){
          setTimeout(() => {
            resovle();
          }, 2000);
        });
    }).then(function(){
      console.log('timeout3');
    });
  }
  {
    let ajax = function(num){
      console.log('执行');
      return new Promise(function(resovle,reject){
          setTimeout(function(){
            if(num>5){
              resovle();
            }else{
              throw new Error('出错了');
            }
           
          },1000);
      })
    };
    ajax(6).then(function(){
       console.log('log',6);
    }).catch(function(err){
      console.log('catch',err);
    });
    ajax(3).then(function(){
      console.log('log',6);
   }).catch(function(err){
     console.log('catch',err);
   });
  }

  {
    //所有图片加载完了再加载页面
    function loadImg(src){
       return new Promise((resolve,reject)=>{
          let img = document.createElement('img');
          img.src = src;
          img.onload = function (){
            resolve(img);
          }
          img.onerror= function(){
             reject(err);
          }
       })
    }
     
    function showImgs(imgs){
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }

    Promise.all([
      loadImg('http://14.png'),
      loadImg('http://14.png'),
      loadImg('http://14.png'),
    ]).then(showImgs);

  }
  {
  //有一个图片加载完了再加载页面
    function loadImg(src){
      return new Promise((resolve,reject)=>{
         let img = document.createElement('img');
         img.src = src;
         img.onload = function (){
           resolve(img);
         }
         img.onerror= function(){
            reject(err);
         }
      })
   }
    
   function showImgs(imgs){
       imgs.forEach(img => {
           document.body.appendChild(img);
       });
   }

   Promise.race([
    loadImg('http://14.png'),
    loadImg('http://14.png'),
    loadImg('http://14.png'),
  ]).then(showImgs);
  }
}



