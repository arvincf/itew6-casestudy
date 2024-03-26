<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link> |
    <router-link to="/list" class="nav-link">Task List</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      tasks: []
    }
  },
  provide() {
    return {
      tasks: this.tasks
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateTask(taskId, newText) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
