
<script>
export default {
  data() {
    return {
      counter: false
    }
  },
}
</script>

<template>
      <header class="header-main-wrapper">
        <div class="heder">
          <h1>Cool header!</h1>
          <button v-on:click="counter = !counter" class="button header-button">add new task</button>
          <h1>{{ counter }}</h1>
        </div>
      </header>
</template>
