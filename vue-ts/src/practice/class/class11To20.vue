<template>
  <el-collapse v-model="activeNames"
               @change="handleChange">
    <el-collapse-item title="箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？"
                      name="58">
      <div>
        1、函数体内的 this
        对象，就是定义时所在的对象，而不是使用时所在的对象。<br />

        2、不可以使用 arguments
        对象，该对象在函数体内不存在。如果要用，可以用 rest
        参数代替。<br />

        3、不可以使用 yield 命令，因此箭头函数不能用作 Generator
        函数。<br />

        4、不可以使用 new 命令，因为：<br />

        没有自己的 this，无法调用 call，apply。<br />
        没有 prototype 属性 ，而 new 命令在执行时需要将构造函数的
        prototype 赋值给新的对象的 __proto__ <br />
      </div>
    </el-collapse-item>
    <el-collapse-item title="a.b.c.d 和 a['b']['c']['d']，哪个性能更高？"
                      name="65">
      <div>
        应该是 a.b.c.d 比 a['b']['c']['d'] 性能高点，<br />
        后者还要考虑 [ ] 中是变量的情况，<br />再者，从两种形式的结构来看
        显然编译器解析前者要比后者容易些，自然也就快一点。 下图是两者的
        AST 对比
      </div>
    </el-collapse-item>
    <el-collapse-item title="为什么普通 for 循环的性能远远高于 forEach 的性能，请解释其中的原因。"
                      name="72">
      <div>
        <a href="https://blog.csdn.net/qq_42345237/article/details/105115089">解说</a>
      </div>
      <div>
        在 forEach 的语法上：
        <br />
        arr.forEach(callback(currentValue [, index [, array]])[,
        thisArg])<br />
        可以看到 forEach
        是有回调的，它会按升序为数组中含有效值的每一项执行一次
        callback，<br />
        且除了抛出异常以外，也没有办法中止或者跳出 forEach 循环。<br />
        那这样的话执行就会额外的调用栈和函数内的上下文。<br />
        而 for 循环则是底层写法，不会产生额外的消耗。<br />
        那在实际业务中没有很大的数组时，for 和 forEach
        的性能差距其实很小，<br />
        forEach 甚至会优于 for 的时间，且更加简洁，可读性也更高，<br />
        一般也会优先使用 forEach 方法来进行数组的循环处理。<br />
        在兼容性上，肯定是 for 循环的兼容优于 forEach 的了。<br />
      </div>
    </el-collapse-item>
    <el-collapse-item title="数组里面有10万个数据，取第一个元素和第10万个元素的时间相差多少"
                      name="75">
      <div>
        <a href="https://juejin.im/entry/6844903494189580302">深究数组（放弃）</a>
        js 中数组元素的存储方式并不是连续的，而是哈希映射关系。<br />
        哈希映射关系，可以通过键名
        key，直接计算出值存储的位置，所以查找起来很快<br />
        Chrome 浏览器JS引擎 V8中，数组有两种存储模式，<br />
        一种是类似C语言中的线性结构存储（索引值连续，且都是正整数的情况下），<br />
        一种是采用Hash结构存储（索引值为负数，数组稀疏，间隔比较大）；<br />
      </div>
    </el-collapse-item>
    <el-collapse-item title="输出以下代码运行结果"
                      name="76">
      <div>
        // example 1<br />
        var a={}, b='123', c=123;<br />
        a[b]='b'; // a={'123':'b'}<br />
        a[c]='c';// b被c覆盖 a={'123':'c'}<br />
        console.log(a[b]);<br />
        <el-button @click="example1">example</el-button>
        ---------------------<br />
        // example 2<br />
        var a={}, b=Symbol('123'), c=Symbol('123');<br />
        a[b]='b';<br />
        a[c]='c';<br />
        console.log(a[b]);// 因为symbol('123')
        彼此之间都是唯一的，没有覆盖一说<br />
        <el-button @click="example2">example</el-button>
        ---------------------<br />
        // example 3<br />
        var a={}, b={key:'123'}, c={key:'456'};<br />
        a[b]='b';// b 不是字符串也不是 Symbol
        类型，需要转换成字符串。<br />
        // 对象类型会调用 toString 方法转换成字符串 [object Object]。<br />
        a[c]='c'; //c 不是字符串也不是 Symbol
        类型，需要转换成字符串。<br />
        console.log(a[b]); //对象类型会调用 toString 方法转换成字符串
        [object Object]。这里会把 b 覆盖掉。<br />
        <el-button @click="example3">example</el-button>
      </div>
      <div>
        1: 对象的键名只能是字符串和 Symbol 类型。
        其他类型的键名会被转换成字符串类型。 对象转字符串默认会调用
        toString 方法
      </div>
    </el-collapse-item>
    <el-collapse-item title="ES6 代码转成 ES5 代码的实现思路是什么"
                      name="66">
      <div>
        那么 Babel 是如何把 ES6 转成 ES5 呢，其大致分为三步：<br />
        将代码字符串解析成抽象语法树，即所谓的 AST<br />
        对 AST 进行处理，在这个阶段可以对 ES6 代码进行相应转换，即转成
        ES5 代码<br />
        根据处理后的 AST 再生成代码字符串<br />
        基于此，其实我们自己就可以实现一个简单的“编译器”，用于把 ES6
        代码转成 ES<br />
      </div>
      <div>
        比如，可以使用 @babel/parser 的 parse 方法，将代码字符串解析成
        AST；<br />
        使用 @babel/core 的 transformFromAstSync 方法，对 AST
        进行处理，<br />
        将其转成 ES5 并生成相应的代码字符串；<br />
        过程中，可能还需要使用 @babel/traverse
        来获取依赖文件等。对此感兴趣的可以看看这个
      </div>
    </el-collapse-item>
    <el-collapse-item title="input 搜索如何防抖，如何处理中文输入"
                      name="79">
      <div>
        防抖就不说了，主要是这里提到的中文输入问题，其实看过elementui框架源码的童鞋都应该知道，<br />
        elementui是通过compositionstart<br />
        &compositionend做的中文输入处理<br />
        这3个方法是原生的方法，这里简单介绍下，
        官方定义如下compositionstart，<br />
        1 ： 事件触发于一段文字的输入之前（类似于
        keydown事件，但是该事件仅在若干可见字符的输入之前，<br />
        而这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）<br />
        简单来说就是切换中文输入法时在打拼音时(此时input内还没有填入真正的内容)，
        会首先触发compositionstart，<br />
        2
        然后每打一个拼音字母，触发compositionupdate，最后将输入好的中文填入input中时触发compositionend。触发compositionstart时，文本框会填入
        “虚拟文本”（待确认文本），同时触发input事件；<br />
        3.在触发compositionend时，就是填入实际内容后（已确认文本）,所以这里如果不想触发input事件的话就得设置一个bool变量来控制。<br />
        失去焦点后内容有改变触发change事件<br />
        识别到你开始使用中文输入法触发**compositionstart 事件<br />
        未输入结束但还在输入中触发compositionupdate **事件<br />
        输入完成（也就是我们回车或者选择了对应的文字插入到输入框的时刻）触发compositionend事件。<br />
        那么问题来了 使用这几个事件能做什么？<br />
        因为input组件常常跟form表单一起出现，需要做表单验证 image<br />
        为了解决中文输入法输入内容时还没将中文插入到输入框就验证的问题<br />
        我们希望中文输入完成以后才验证
      </div>
      <div>
        测试<br />
        <input id="myinput" />
        <el-button @click="test">测试</el-button>
      </div>
    </el-collapse-item>
    <el-collapse-item title="var、let 和 const 区别的实现原理是什么"
                      name="83">
    </el-collapse-item>
    <el-collapse-item title="介绍下前端加密的常见场景和方法"
                      name="96">
      <div>[3, 15, 8, 29, 102, 22].sort((a,b) => {return a - b});</div>
      <div>
        返回值大于0 即a-b 大于 0 ， a 和 b 交换位置 返回值大于0 即a-b
        小于 0 ， a 和 b 位置不变 返回值等于0 即a-b = 0 ， a 和 b
        位置不变
      </div>
    </el-collapse-item>
    <el-collapse-item title="输出以下代码执行的结果并解释为什么"
                      name="98">
      <div>
        function changeObjProperty(o) { <br>
        o.siteUrl ="http://www.baidu.com" <br>
        o = new Object()<br>
        o.siteUrl ="http://www.google.com"<br>
        }<br>
        let webSite = new Object();<br>
        changeObjProperty(webSite);<br>
        console.log(webSite.siteUrl);<br>
      </div>
      <div>
        <el-button @click="test1">测试</el-button>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
export default {
  name: 'Sort',
  data() {
    return {
      activeNames: '',
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    example1() {
      let a = {},
        b = '123',
        c = 123
      a[b] = 'b'
      a[c] = 'c'
      console.log(a[b])
    },
    example2() {
      let a = {},
        b = Symbol('123'),
        c = Symbol('123')
      a[b] = 'b'
      a[c] = 'c'
      console.log(a[b])
    },
    example3() {
      let a = {},
        b = { key: '123' },
        c = { key: '456' }
      a[b] = 'b'
      a[c] = 'c'
      console.log(a[b])
    },
    // test() {
    //   function jeiliu(timeout) {
    //     let timer
    //     function input(e) {
    //       if (e.target.composing) {
    //         return
    //       }
    //       if (timer) {
    //         clearTimeout(timer)
    //       }
    //       timer = setTimeout(() => {
    //         console.log(e.target.value)
    //         timer = null
    //       }, timeout)
    //     }
    //     return input
    //   }

    //   function onCompositionStart(e) {
    //     e.target.composing = true
    //   }
    //   function onCompositionEnd(e) {
    //     //console.log(e.target)
    //     e.target.composing = false
    //     let event = document.createEvent('HTMLEvents')
    //     event.initEvent('input')
    //     e.target.dispatchEvent(event)
    //   }
    //   let input_dom = document.getElementById('myinput')
    //   input_dom.addEventListener('input', jeiliu(1000))
    //   input_dom.addEventListener('compositionstart', onCompositionStart)
    //   input_dom.addEventListener('compositionend', onCompositionEnd)
    // },
    changeObjProperty(o) {
      // o这个形参实际可以写成var o = webSite
      o.siteUrl = 'http://www.baidu.com'
      // 偷偷添加一行代码，此时website和o指向同一个堆地址
      // website.siteUrl = "http://www.baidu.com";
      o = new Object() // 相当于 o = {},  o 移情别恋到新的对象引用上去了，而webSite还死心塌地之前的对象引用，因此分道扬镳了
      o.siteUrl = 'http://www.google.com'
      return o
    },

    test1() {
      let webSite = new Object() // let webSite = {}
      this.changeObjProperty(webSite)
      console.log(webSite.siteUrl) //  http://www.baidu.com
      let newo = this.changeObjProperty(webSite)
      console.log(newo.siteUrl) // "http://www.google.com"
    },
  },
}
</script>
<style></style>
