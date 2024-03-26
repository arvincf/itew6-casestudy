<template>
  <div class="task-list">
    <h2>All Tasks: </h2>
    <ul class="tasks">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-container">
          <div class="task-content">
            <input type="checkbox" v-model="task.completed" class="task-checkbox" />  
            <span v-if="!task.editing" :class="{ completed: task.completed }" class="task-text">{{ task.text }}</span>
            <div v-if="task.editing" class="edit-task">
              <input type="text" v-model="task.newText" @keyup.enter="updateTask(task)" class="edit-input"/>
            </div>
          </div>
          <div class="button-group">
            <button @click="editTask(task.id)" v-if="!task.editing" class="edit-button">Edit</button>
            <button @click="updateTask(task)" v-if="task.editing" class="save-button">Save</button>
            <button @click="cancelEdit(task)" v-if="task.editing" class="cancel-button">Cancel</button>
            <button @click="deleteTask(task.id)" class="delete-button">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
  methods: {
    deleteTask(taskId) {
      this.$emit('delete-task', taskId);
    },
    editTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.editing = true;
        task.newText = task.text;
      }
    },
    updateTask(task) {
      if (task.newText.trim()) {
        this.$emit('update-task', task.id, task.newText);
        task.editing = false;
      }
    },
    cancelEdit(task) {
      task.editing = false;
    }
  }
};
</script>

<style scoped>
.task-list {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: auto;
  transition: all 0.3s ease;
  font-size: 20px;
}

.tasks {
  list-style-type: none;
  padding: 0;
}

.task-item {
  margin-bottom: 10px;
}

.task-container {
  border: 1px solid #208a32;
  padding: 10px;
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: #F6F5F5;
}

.task-content {
  align-items: center;
}

.task-checkbox {
  margin-right: 10px;
}

.completed {
  text-decoration: line-through;
  color: green;
}

.edit-task {
  margin-top: 5px;
}

.edit-input {
  width: 200px;
  padding: 5px;
  margin-right: 5px;
}

.button-group {
  margin-top: 5px;
}

.edit-button,
.save-button {
  padding: 5px 10px;
  background-color: #7db95d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  transition: all 0.3s ease;
}

.cancel-button {
  padding: 5px 10px;
  background-color: #FFAF45;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
  transition: all 0.3s ease;
}

.delete-button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}
</style>
