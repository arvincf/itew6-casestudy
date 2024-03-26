<template>
  <div class="form-container">
    <h2>Add a Task:</h2>
    <input class="task-input" v-model="taskText" placeholder="Enter task e.g Task 1" @keyup.enter="addTask" />
    <button class="task-button" @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskText: ''
    };
  },
  methods: {
    addTask() {
      if (this.taskText.trim()) {
        this.$emit('add-task', { id: Date.now(), text: this.taskText.trim(), completed: false });
        this.taskText = '';
      } else {
      alert('Task description cannot be empty!');
    }
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 50%;
  height: 40%;
  margin: auto;
  background-color: #DDDDDD;
  padding: 5px;
  border-radius: 5px;
}

.task-input {
  width: 30%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
}

.task-button {
  width: 10%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CCD99;
  color: black;
  cursor: pointer;
}

.task-button:hover {
  background-color: #349f78;
}

</style>