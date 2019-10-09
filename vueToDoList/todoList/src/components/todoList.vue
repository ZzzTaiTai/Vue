<template>
  <div class="app">
    <div class="box">
      <h1>{{ msg }}</h1>
      <input type="text" value="" id="todoBox" v-model="todo" @keyup.enter="add"/>
      <button id="addButton" @click="add" >添加</button>
      <div class="todoContent">
      <transition name="bounce">
      <ul v-if="lists.length>0">
      <transition-group name='fade'>
        <li v-for="(list,index) in lists" :key="'id'+index"><input id="check" value="check" type="checkbox" @click="del(index)"/>{{list.title}}</li>
      </transition-group>
      </ul>
      <p v-else>无todo内容，请添加</p>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'todo List',
      todo:'',
      lists:[
        {title:'今天要做的事情'},
        {title:'现在要做的事情'}
      ]
    }
  },
  methods: {
    add:function(){
      this.lists.push({
        title:this.todo.trim(),
        checked:false
      });
      this.todo='';
    },
    del:function(index){
      this.lists.splice(index,1)
    }
  },
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
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
.todoContent{
  margin:30px 0;
  background: #CDCDCD;
  padding:10px 5px;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
