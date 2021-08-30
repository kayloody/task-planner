<template>
    <div>
        <input type="checkbox" v-model="isCompleted" />
        {{name}}
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: {
            name: String,
            isCompleted: Boolean,
        }
    }
</script>