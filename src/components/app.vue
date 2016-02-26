<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <Todos></Todos>
  </div>
</template>

<script>
import Todos from './todos.vue'

export default {
    components: { Todos },
    data () {
        return {
            msg: 'Hello Vue!'
        }
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
