
export function Main() {
    let obj = {
        time: "2017-03-11",
        name: "net",
        _r: 123
    };

    let moniter = new Proxy(obj, {
        //拦截对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')
        },
        //拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },
        //拦截key in object 操作
        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key){
         if(key.indexOf('_')>-1){
             delete target[key];
             return true;
         }else{
             return target[key];
         }
        },
        //拦截Object.keys, Object.getOwnPropetySymbols,Object.getOwnPropertyName
        ownKeys(target){
            return Object.keys(target).filter(item=>item !="time");
        }
    });
    console.log('get', moniter.time);
    moniter.time = '2018';
    console.log('set', moniter.time, moniter);
    console.log('has','name' in moniter,'time' in moniter);
    delete moniter.time;
    console.log('delete',moniter);
    delete moniter._r;
    console.log('delete',moniter);
    console.log('ownKeys',Object.keys(moniter));

    //反射
    let obj = {
        time: "2017-03-11",
        name: "net",
        _r: 123
    };
    console.log('Reflect get',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','mukewang');
    console.log(obj);
    console.log(Reflect.has(obj,'name'));
    //使用场景 校验
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,Proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy)
                    }else{
                        throw Error(`不能设置${key} 到 ${value}`)
                    }
                     
                }else{
                    throw Error(`${key}不存在`);
                }
            }
        })
    }

    const personValidators={
        name(val){
            return typeof val === 'string'
        },
        age(val){
            return typeof val === 'number' && val >18
        }
    }
    class personal {
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this,personValidators)
        }
    }
    const personal = new Personal("lilei",30);
    console.log(personal);

}



