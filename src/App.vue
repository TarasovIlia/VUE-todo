<script>
import TodoList from './components/TodoList.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    Header
  }
}
</script>

<template>
  <div id="app">
    <Header/>
    <TodoList/>
  </div>
</template>


<style lang="scss" src="./style/index.scss"></style>
