<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link :to="{name: 'todos.index'}">Todos</router-link>
  </nav>
  <router-view/>
</template>

