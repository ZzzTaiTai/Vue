<template>
  <div id="app">
    <todoList/>
  </div>
</template>

<script>
import todoList from './components/todoList'

export default {
  name: 'App',
  components: {
    todoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:600px;
  margin:0 auto;
}
</style>
