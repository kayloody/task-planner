<template>
  <h1>Tasks</h1>
  <input
    type="text"
    id="task-field"
    @keydown="(e) => {
      if (e.keyCode === 13) {
        addTask();
      }
    }"/>
  <button @click="addTask()">Add</button>
  <div v-for="(task, index) in tasks" :key="index">
    <Task :name="task.name" :isCompleted="task.isCompleted"/>
  </div>
</template>

<script>
  import Task from "../components/Task.vue"

  export default {
    name: 'Tasks',
    components: {
      Task
    },
    data() {
      return {
        tasks: []
      }
    },
    methods: {
      addTask() {
        let taskField = document.getElementById("task-field");
        this.tasks = [{
          name: taskField.value,
          isCompleted: false
        }, ...this.tasks];
        taskField.value = "";
      }
    },
    created() {
      this.tasks = [{name: "Wash car", isCompleted: false},{name: "Wash car", isCompleted: false},{name: "Wash car", isCompleted: true}]
    }
  }
</script>
