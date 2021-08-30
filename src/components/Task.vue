<template>
    <input type="checkbox" v-model="isCompleted" :id=id @change="toggleState()"/>
    <label :for=id >{{name}}</label>
</template>

<script>
    export default {
        name: "Task",
        props: {
            id: String,
            name: String,
            isCompleted: Boolean,
        },
        methods: {
            toggleState() {
                this.$emit('onToggleState', this.id, this.isCompleted);
            }
        }
    }
</script>