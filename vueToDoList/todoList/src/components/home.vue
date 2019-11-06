<template>
<div>
  <h2>首页</h2>
  <router-link to="/todoList">todoList程序</router-link>
  <router-link to="/appHome">appHome</router-link>
   </div>
</template>
<script>
export default {
  props:{
    item:{
      type: Object,
      required: true
    }
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
