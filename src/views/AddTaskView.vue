<template>
  <div>
    <AddTask @add-task="addTask" />
  </div>
<br>
<br>
  <div class="status">
    <h3>STATUS:</h3>
    <p>Active Task: {{ ActTasks }}</p>
    <p>Completed: {{ totalTasksCompleted }}</p>
    <p>Total Task: {{ tasks.length }}</p>
    <p>Message: {{ taskStatusMessage }}</p>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask.vue';

export default {
  components: {
    AddTask
  },
  inject: ['tasks'],
  methods: {
  addTask(task) {
    this.tasks.push(task);
    this.$router.push('/list');
  }
},
computed: {
  taskStatusMessage() {
    if (this.totalTasksCompleted == 0) {
        return "No task done";
      } else if (this.totalTasksCompleted === this.tasks.length) {
        return "All tasks done";
      } else {
        return "Sometask Is not done";
      }
  },
  ActTasks() {
    return this.tasks.filter(task => !task.completed).length;
  },
  totalTasksCompleted() {
    return this.tasks.filter(task => task.completed).length;
  },
}

  
};
</script>

<style scoped>
.status {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  width: 48%;
  margin: auto;
}

.status h3 {
  color: #6c757d;
  margin-bottom: 10px;
}

.status p {
  color: #6c757d;
  margin: 5px 0;
}
</style>