<template>
  <div>
    <TaskList :tasks="tasks" @delete-task="deleteTask" @edit-task="editTask" @update-task="updateTask" />
  </div><br>
</template>

<script>
import TaskList from '@/components/TaskList.vue';

export default {
  components: {
    TaskList
  },
  inject: ['tasks'],
    
  methods: {
    deleteTask(taskId) {
      const index = this.tasks.findIndex(task => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    editTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.editing = true;
        task.newText = task.text;
      }
    },
    updateTask(taskId, newText) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.text = newText;
        task.editing = false;
      }
    }
  }
};
</script>

<style scoped>
.status {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
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
