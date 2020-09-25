<template>
     <!-- <div :class="['todo-item',todo.completed ? 'completed' : '']">
      <input 
      type="checkbox"
      class="toggle"
      v-model="todo.completed"
      >
      <label>{{todo.content}}</label>
      <button class="destroy" @click="deleteTodo"></button>
    </div> -->
    <div :class="['todo-item',todo.completed ? 'completed' : '']">
            <input 
            type="checkbox"
            class="toggle"
            v-model="todo.completed" 
            >
            <label>{{todo.content}}</label>
            <button class="destroy" @click="deleteTodo"></button>
    </div>
</template>

<script>
import '../asset/style/item.styl'
    export default{
       props:{
           todo:{
            type:Object,
            required:true,
           }
       },
       methods:{
        deleteTodo(){
         this.$emit('del', this.todo.id);
        }
       }

    }
</script>