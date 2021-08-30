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

  <div v-if="errorMessage === ''">
    <div v-for="(task, index) in tasks" :key="index" >
      <Task
        :id="task._id"
        :name="task.name"
        :isCompleted="task.isCompleted"
        @onToggleState="updateTask" />
    </div>
  </div>

  <p v-else>{{errorMessage}}</p>

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
        errorMessage: "",
        tasks: []
      }
    },
    methods: {
      errorHandler(method) {
        this.errorMessage = `Failed to ${method}. Please refresh.`;
      },
      fetchTasks() {
        this.axios.get(process.env.VUE_APP_API_URL)
          .then(res => this.tasks = res.data)
          .catch(() => this.errorHandler("fetch tasks"));
      },
      createTask() {
        let taskField = document.getElementById("task-field");

        if (taskField.value !== "") {
          let newTask = {
            name: taskField.value,
            isCompleted: false
          };
          
          this.axios.post(process.env.VUE_APP_API_URL, newTask)
            .then(() => this.fetchTasks())
            .catch(() => this.errorHandler("create task"));

          taskField.value = "";
        }
      },
      updateTask(id, isCompleted) {
        this.axios.put(process.env.VUE_APP_API_URL + "/" + id, { isCompleted })
          .then((res) => console.log(res))
          .catch(() => this.errorHandler("update task"));
      },
    },
    created() {
      this.fetchTasks();
    }
  }
</script>
