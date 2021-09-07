<script>
//import draggable from 'vuedraggable'
import DELETE_ITEM from '../api/DELETE_ITEM'
import CHANGE_ITEM_DONE from '../api/CHANGE_ITEM_DONE'

import card from './card.vue'

export default {
  components: {
    card
  },
  data() {
    return {
      parts : [],
      cartViewChange : false
    }
  },
  created() {
    fetch("http://localhost:3000/todoList/")
    .then(response => response.json(response))
    .then(data => (this.parts = data))
  },
  updated() {
    fetch("http://localhost:3000/todoList/")
    .then(response => response.json(response))
    .then(data => (this.parts = data))
  },
  methods : {
    deleteItem(id)  {
      DELETE_ITEM(id)
    },
    setDone(id) {
      this.parts.done = !this.parts.done
      console.log(this.parts.done)
      CHANGE_ITEM_DONE(id,this.parts.done)
    },
    setViewChange() {
      this.cartViewChange = !this.cartViewChange
    }
  }
}
</script>

<template>
  <section :class="{
    'todo-list' : true,
    'todo-grid' : cartViewChange === true
  }">  
  <button 
    class="button menu-button menu-change-view-button"
    @click="setViewChange()"
  >
  {{cartViewChange ? "List" : "Grid"}}
  </button>
    <card 
      v-for="(part, index) in parts"
      :key="part.id"
      :id="part.id"
      :index="index"
      :title="part.title"
      :task="part.task"
      :done="part.done"
      :important="part.important"
      :cartViewGrid="cartViewChange"
      @click="deleteItem($event,id)"
      @change="setDone($event,id)"
    />
  </section>
</template>