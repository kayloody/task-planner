<template>
    <div>
        <input type="checkbox" v-model="completed" />
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: {
            name: String,
            completed: Boolean,
        }
    }
</script>