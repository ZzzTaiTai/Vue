<template>
  <li><input id="check" value="check" type="checkbox" @change="$emit('delTodo',item.id)"/>{{item.title}}</li>
</template>
<script>
export default {
  props:{
    item:{
      type: Object,
      required: true
    },
  },
}
</script>
<style scoped>
li {
  display: block;
  margin:10px;
  text-align: left;
  padding:0 10px;
  background:#fff;
  height: 34px;
  line-height: 34px;
  border-radius: 3px;
  transition: all ease-in .3s;
}
a {
  color: #42b983;
}

</style>
