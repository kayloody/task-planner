<template>
  <h1>Tasks</h1>
  
  <input
    type="text"
    id="task-field"
    @keydown="(e) => {	// Create task with enter
      if (e.keyCode === 13) {
        createTask();
      }
    }"
	/>
  <button @click="createTask()">Add</button>

  <!-- Conditionally display components. Tasks or error message -->
  <div v-if="errorMessage === ''">
    <div v-for="(task, index) in tasks" :key="index" >
			<!-- Single task component -->
      <Task
        :id="task._id"
        :name="task.name"
        :isCompleted="task.isCompleted"
        @onToggleState="updateTask"
			/>
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
      errorHandler(method) {	// Message depending on failure
        this.errorMessage = `Failed to ${method}. Please refresh.`;
      },
      fetchTasks() {	// Get all tasks
        this.axios.get(process.env.VUE_APP_API_URL)
          .then(res => this.tasks = res.data)
          .catch(() => this.errorHandler("fetch tasks"));
      },
      createTask() {	// Create a new task
        let taskField = document.getElementById("task-field");

        if (taskField.value !== "") {
          let newTask = {
            name: taskField.value,
            isCompleted: false
          };
          
					// Re-use fetchTasks to load all tasks
          this.axios.post(process.env.VUE_APP_API_URL, newTask)
            .then(() => this.fetchTasks())
            .catch(() => this.errorHandler("create task"));

          taskField.value = "";
        }
      },
      updateTask(id, isCompleted) {	// Update a task (completed status)
        this.axios.put(process.env.VUE_APP_API_URL + "/" + id, { isCompleted })
          .catch(() => this.errorHandler("update task"));
      },
    },
    created() {	// Load all tasks on view creation
      this.fetchTasks();
    }
  }
</script>
