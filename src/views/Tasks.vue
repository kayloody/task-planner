<template>
  <h1>Tasks</h1>

  <input
    type="text"
    id="task-field"
    @keydown="(e) => {
      if (e.keyCode === 13) {
        createTask();
      }
    }"/>
  <button @click="createTask()">Add</button>

  <div v-for="(task, index) in tasks" :key="index">
    <Task
      :id="task._id"
      :name="task.name"
      :isCompleted="task.isCompleted"
      @onToggleState="updateTask" />
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
      fetchAll() {
        this.axios.get(process.env.VUE_APP_API_URL)
          .then(res => this.tasks = res.data)
          .catch(() => this.tasks = [{
            name:"Failed to load. Please refresh.",
            isCompleted: true
          }]);
      },
      createTask() {
        let taskField = document.getElementById("task-field");

        if (taskField.value !== "") {
          let newTask = {
            name: taskField.value,
            isCompleted: false
          };
          
          this.axios.post(process.env.VUE_APP_API_URL, newTask)
            .then(() => this.fetchAll())
            .catch(() => this.tasks = [{
              name:"Failed to add task. Please refresh.",
              isCompleted: true
            }]);

          taskField.value = "";
        }
      },
      updateTask(id, isCompleted) {
        this.axios.put(process.env.VUE_APP_API_URL + "/" + id, { isCompleted })
          .then((res) => console.log(res))
          .catch(() => this.tasks = [{
            name:"Failed to update task. Please refresh.",
            isCompleted: true
          }]);
      },
    },
    created() {
      this.fetchAll();
    }
  }
</script>
