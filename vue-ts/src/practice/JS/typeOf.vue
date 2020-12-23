<template>
	<div>
		<ul>
			<li>type of 能判断哪些类型</li>
			<li>
				<ul>
					<li>1: 判断值得类型</li>
					<li>2: 判断是否是引用类型, null 也是一种引用类型</li>
					<li>3: 判断函数</li>
				</ul>
			</li>
			<li>手写深拷贝</li>
            <li>
                <ul>
                    <li>JSON.pasre(JSON.stringify(a))</li>
                    <li>lodash第三方库</li>
                </ul>
            </li>
            <li>除了 == null 之外， 其他一律用===</li>
		</ul>
        <button></button>
	</div>
</template>
<script>
export default {
    method:{
        deepClone(obj={}){
            if(typeof obj !=='object' ||obj ==null){
                return obj;
            }
            //初始化返回结果
            let result 
            if(obj instanceof Array){
                result = [];
            }else{
                result = {};
            }
            for (let key in obj){
                //保证key 不是原型的属性
                if(obj.hasOwnPropery(key)){
                    result[key] = this.deepClone(obj[key]);
                }
            }
            return result;
        }
    }
}
</script>
<style scoped></style>
