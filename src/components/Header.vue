
<script>
export default {
  props: {
    openMenu : Boolean
  },
  data() {
    return {
    }
  },
}
</script>

<template>
      <header class="header-main-wrapper">
        <div class="heder">
          <h1>Cool header!</h1>
          <button class="button menu-button" @click.stop="$emit('click')">{{ openMenu ? "back to task" : "add new task"}}</button>
        </div>
      </header>
</template>
