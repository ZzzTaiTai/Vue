<template>
  <div class="hello">
   <h2>{{msg}}</h2><hr>
   <h3>{{count}}</h3>
   <p>
   <button @click="add(10)">add</button>
   <button @click="reduce">reduce</button>
   </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState,mapMutations, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello Vuex'
    }
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['count'])
 
  },
  methods: mapMutations(['add','reduce']),
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
