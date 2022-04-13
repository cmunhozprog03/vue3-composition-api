<template>
  <div>
    {{ todo.title }} - {{ todo.body }}
  </div>
</template>

<script>
export default {
  name: 'TodoComponent',
  props: {
    todo: {
      require: true,
      type: Object,
    }
  }
}
</script>