<template>
    <div class="helper">
        <span class="left">{{unfinishedLength}} items left</span>
        <span class="tabs">
            <span v-for="state in states"
            :key="state"
            class="[state, filter === state ? 'actived':'']"
            @click="toggleFilter(state)"
            >{{state}}</span>
        </span>
        <span class="clear" @click="clearAllCompleted"> Clear  Completed </span>
    </div>
    </template>
<script>
import '../asset/style/tabs.styl'
export default{
  props:{
       filter:{
            type: String,
            require: false,
       },
       todos:{
           type:Array,
           required:true
       }
  },
  data(){
			return {
				states:['all','active','completed']
			}
        },
computed:{
   unfinishedLength(){
       return this.todos.filter(todo=> !todo.completed).length;
   }
},
  methods:{
			clearAllCompleted(){
                this.$emit('clearAllCompleted');
            },
			toggleFilter(state){
                console.log(state);
               this.$emit('toggle',state);
            }
		}
}
</script>