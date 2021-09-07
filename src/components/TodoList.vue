<script>
//import draggable from 'vuedraggable'
//import DELETE_ITEM from '../api/DELETE_ITEM'
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
  methods : {
    deleteItem(id)  {
      //DELETE_ITEM(id)
      console.log('kek' + id)
    },
    setDone() {
      this.parts.done = !this.parts.done
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
      @click="deleteItem()"
      @change="setDone()"
    />
  </section>
</template>