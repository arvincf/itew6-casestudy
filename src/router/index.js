import { createRouter, createWebHistory } from 'vue-router'
import AddTaskView from '@/views/AddTaskView.vue'
import TaskListView from '@/views/TaskListView.vue'

const routes = [
  {
    path: '/',
    name: 'AddTask',
    component: AddTaskView
  },
  {
    path: '/list',
    name: 'TaskList',
    component: TaskListView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
