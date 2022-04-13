<template>
  <div>
    <h1>
      Lista de Tarefas
      <router-link :to="{name: 'todos.create'}">+</router-link>
    </h1>
    <div v-if="loading">
      Carregando as tarefas...
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.identify">
        <todo :todo="todo" />
      </li>

    </ul>
  </div>
</template>

<script>

import TodoService  from '@/services/todos.service'
import { onMounted, ref } from 'vue'
import Todo from './TodoComponent.vue'


export default {
  name: 'TodosView',
  setup() {

    const todos = ref([])
    const loading = ref(false)

    onMounted(() => {

      loading.value - true

      TodoService.getAll()
                .then(response =>todos.value = response.data.data)
                .catch(error => console.log(error))
                .finally(() => loading.value = false)
    })

    return {
      todos,
      loading
    }
  },
  components: {
    Todo
  }
}
</script>