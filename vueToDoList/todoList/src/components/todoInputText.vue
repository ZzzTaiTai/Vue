<template>
<div>
  <input type="text" id="todoBox" v-model="curTodo"  @keyup.enter="$emit('addTodo',curTodo)"/>
  <button id="addButton" @click="$emit('addTodo',curTodo)" >添加</button>
</div>
</template>
<script>
export default {
  props:['todo'],
  data() {
    return {
      curTodo: this.todo
    }
  },
}
</script>
<style scoped>

</style>
