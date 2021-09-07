<script>
//import draggable from 'vuedraggable'
import DELETE_ITEM from '../api/DELETE_ITEM'

export default {
  data() {
    return {
      parts : [],
    }
  },
  created() {
    fetch("http://localhost:3000/todoList/")
    .then(response => response.json(response))
    .then(data => (this.parts = data))
  },
  methods : {
    deleteItem : (id, checked) => {
      checked ? DELETE_ITEM(id) : null
    },
  }
}
</script>


<template>
  <section class="todo-list">
    <div 
      v-for="(part, index) in parts"
      :key="part.id"
      :class="{
        'todo-item': true,
        'task-done': part.done === true,
        non: part.delete === false
      }"
    >
      <h1>{{ index + 1 }}</h1>
      <h1>{{ part.title }}</h1>
      <p>{{ part.task }}</p>
      <div :class="[
        'important',
        {non: part.important === false}
      ]"
      ></div>
      <div :class="{
        indicator: true,
        non: part.done === !true
      }"
      ><p @click="deleteItem(part.id, part.done)">delete</p></div>
      <input class="checkout-input" v-on:change="part.done = !part.done" type="checkbox" name="done" id="">
    </div>
  </section>
</template>