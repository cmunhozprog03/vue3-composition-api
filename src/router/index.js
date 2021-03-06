import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Todos from '@/views/Todos/TodosView.vue'
import AddTodo from '@/views/Todos/AddTodo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/todos',
    name: 'todos.index',
    component: Todos
  }, {
    path: '/todos/create',
    name: 'todos.create',
    component: AddTodo
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
