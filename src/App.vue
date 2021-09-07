<script>
import TodoList from './components/TodoList.vue'
import Header from './components/Header.vue'
import AddItem from './components/AddItem.vue'

export default {
  data() {
    return {
      openMenu : false
      }
  },
  name: 'App',
  components: {
    TodoList,
    Header,
    AddItem
  },
  methods: {
    setMenu() {
      this.openMenu = !this.openMenu
    }
  }
}
</script>

<template>
  <div id="app">
    <Header 
      @click="setMenu()"
      :openMenu="openMenu"
    />
    <div class="main-content-wrapper">
      <TodoList v-if="!openMenu"/>
      <AddItem v-else/>
    </div>
  </div>
</template>


<style lang="scss" src="./style/index.scss"></style>
