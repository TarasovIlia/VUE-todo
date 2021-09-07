<script>
import ADD_ITEM from '../api/ADD_ITEM'

export default {
  data() {
    return {
      data : {
        title : "",
        task : "",
        done : false,
        important : false,
      }
      
      
    }
  },
  methods : {
    addItem : (data) => {
        if (data.title && data.task) {
            ADD_ITEM(data)
        }
    }
  }
}
</script>

<template>
<section class="todo-list">
    <form class="form-menu" action="">
        <label for="title"><h1>Title</h1></label>
        <input v-on:change="(e) => data.title = e.target.value" class="input" type="text" name="" id="title">
        <label for="task"><h1>Task</h1></label>
        <textarea v-on:change="(e) => data.task = e.target.value" class="input textarea" name="" id="task" ></textarea>
        <div class="row">
            <label for="important"><h1>Important</h1></label>
            <input v-on:change="data.important = !data.important" class="menu-checkox checkout-input" type="checkbox" id="important">
        </div>
        <button class="button menu-button add-button" v-on:click="addItem(data, $event)">add new task</button>
    </form>
</section>
</template>