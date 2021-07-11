
const btn = document.getElementById('btn1');
btn.addEventListener('click', (event) => {
	console.log('clicked');
})
//通用的事件绑定函数
function bindEvent(ele, type, fn) {
	ele.addEventListener(type, fn);
}
const btn2 = document.getElementById('btn2');
bindEvent(btn2, 'click', (event) => {
    event.preventDefault();
    event.stopPropagation(); //阻止冒泡
	alert('clicked');
})
//事件冒泡
const p1 = document.getElementById('p1');
const body = document.body;
bindEvent(p1, 'click', (event) => {
	event.stopPropagation(); //阻止冒泡
	alert('激活');
});
bindEvent(body, 'click', (event) => {
	alert('取消');
});
//事件代理
const div3 = document.getElementById('div3');
bindEvent(div3,"click", event=>{
    event.preventDefault();
    event.stopPropagation(); //阻止冒泡
    const target = event.target;
    if(target.nodeName === 'A'){
        alert(target.innerHTML);
    }
})