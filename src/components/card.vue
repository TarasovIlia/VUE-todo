<script>

export default ({
    props: {
        title: String,
        task: String,
        index: Number,
        done: Boolean,
        important: Boolean,
        id: Number,
        cartViewGrid: Boolean
    },
    setup() {
    },
})
</script>


<template>
    <div :class="{
        'todo-cart': true,
        'cart-grid-view': cartViewGrid === true,
        'cart-list-view': cartViewGrid === false,
        'task-done': done === true,
      }"
    >
        <h1>{{ index + 1 }}</h1>
        <h1>{{ title }}</h1>
        <p>{{cartViewGrid}}</p>
        <p>{{ task }}</p>
        <div :class="[
            'important',
            {non: important === false}
        ]"
        ></div>
        <div :class="{
            indicator: true,
            non: done === false
        }"
        ><p @click="$emit('click', id)">delete</p></div>
        <input class="checkout-input" @change="$emit('change')" type="checkbox" name="done" id="">
    </div>
</template>