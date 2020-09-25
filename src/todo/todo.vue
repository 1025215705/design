
<template>
    <section class="real-app">
    <input
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下来做什么"
        @keyup.enter="addTodo">
    <Item 
    :todo="todo"
    v-for="todo in filteredTodos"
    :key="todo.id"
    @del="deleteTodo"
    ></Item>
    <Tabs :filter="filter" :todos="todos"
    @toggle ="toggleFilter"
    @clearAllCompleted="clearAllCompleted"></Tabs>
    </section>
</template>


<script>
 import '../asset/style/todo.css';
 import Item from './item.vue';
 import Tabs from './tabs.vue';
 let id = 0;
 export default{
     data(){
         return{
             todos:[],
             filter:'all',
         }
     },
     components:{
         Item,
         Tabs,
     },
     computed:{
      filteredTodos(){
          console.log(this.filter);
         if(this.filter == 'all'){
             return this.todos;
         }
         const completed = this.filter === 'completed';
         console.log(completed);
         return this.todos.filter(todo=> completed === todo.completed);
        }
    },
     methods:{
        addTodo(e){
        this.todos.unshift({
            id:id++,
            content: e.target.value.trim(),
            completed:false
        });//第一行插入
        e.target.value = '';//清空
    },
    deleteTodo(id){
      this.todos.splice(this.todos.findIndex(todo=> todo === id),1);
    },
    toggleFilter(state){
      this.filter = state;
      console.log(this.filter);
    },
    clearAllCompleted(){
        this.todos = this.todos.filter(todo=>!todo.completed);
    }

}
 }
</script>
