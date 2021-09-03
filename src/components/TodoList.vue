<script>
//import draggable from 'vuedraggable'
export default {
  data() {
    return {
      parts : null
    }
  },
  created() {
    fetch("http://localhost:3000/todoList")
    .then(response => response.json(response))
    .then(data => (this.parts = data))
  },  
}
</script>

<template>
  <div class="todo-main-wrapper">
    <section class="todo-list">
      <div 
        v-for="(part) in parts"
        :key="part.title"
        class="todo-item"
      >
        <h1>{{ part.id }}</h1>
        <h1>{{ part.title }}</h1>
        <p>{{ part.task }}</p>
        <div :class="{
          indicator: true,
          non: part.done === true
        }"
        ></div>
        <input type="checkbox" name="done" id="">
      </div>
    </section>
  </div>
</template>