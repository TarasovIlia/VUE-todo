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
        <div :class="{
            'checkout-container' : true
        }">
            <input class="checkout-default" @change.once="$emit('change', id)" type="checkbox" name="done" :id="id">
            <label :for="id" class="custom-checkout"></label>
        </div>
    </div>
</template>