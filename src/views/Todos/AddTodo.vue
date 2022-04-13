<template>
  <div>
    <h1>Adicionar Nova Tarefa</h1>

    <form action="#" method="post" @submit.prevent="addTodo">
      <input type="text" vame="title" placeholder="Título" v-model="todo.name">
      <input type="text" vame="description" placeholder="Descrição" v-model="todo.description">
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
import router from '@/router'
import {  reactive } from 'vue'
import TodoService  from '@/services/todos.service'
export default {
  setup() {

    const todo = reactive({
      name: '',
      description: '',
      completed: false,
      
    })

    const addTodo = () => {

      
      TodoService.addTodo({...todo})
                
                .then(() => router.push({name: 'todos.index'}))
                
    }
    return {
      addTodo,
      todo
    }
  }
}
</script>