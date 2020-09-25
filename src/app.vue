<template>
  <div id="app">
      <div id="cover">
      </div>
      <Header></Header>
      <Footer></Footer>
      <todo></todo>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'
export default{
   components:{
       Header,
       Footer,
       Todo,
   }
}
</script>
