<template>
  <div class="app">
    <div class="box">
      <h1>{{ msg }}</h1>
      <todoInputText 
        :todo="todo"
        @addTodo="addTodo"
      ></todoInputText>
      <div class="todoContent">
      <transition name="bounce">
      <ul v-if="lists.length>0">
      <transition-group name='fade'>
      <todoListItem
        v-for="(item,index) in lists"
        :key="'id'+index"
        :item='item'
        :index='index'
        @delTodo="delTodo"
      ></todoListItem>
      </transition-group>
      </ul>
      <p v-else>无todo内容，请添加</p>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
import todoListItem from './todoListItem'
import todoInputText from './todoInputText'
let newTodoId = 1;
export default {
  components:{
    todoListItem,todoInputText
  },
  name: 'app',
  data () {
    return {
      msg: 'todo List',
      todo:'',
      lists:[
        {
          id:newTodoId++,
          title:'今天要做的事情'
        },
        {
          id:newTodoId++,
          title:'现在要做的事情'
        }
      ]
    }
  },
  methods: {
    addTodo:function(curTodo){
      const trimedText = curTodo.trim();
      if(trimedText){
        this.lists.push({
        id:newTodoId++,
        title:trimedText
      });
        this.todo='';
      }else{
        alert("内容不能为空，请输入内容")
      }
      
    },
    delTodo:function(curTodoId){
      this.lists = this.lists.filter( item =>{
        return item.id !==curTodoId
      })
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
