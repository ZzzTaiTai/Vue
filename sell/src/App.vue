<template>
  <div id="app">
    <headers :seller='seller'></headers>
    <div class="tab border-1px">
        <router-link class="tab-item" to="goods">商品</router-link>
        <router-link class="tab-item" to="ratings">评论</router-link>
        <router-link class="tab-item" to="seller">商家</router-link>
    </div>
    <goods :seller='seller'></goods>
    <!-- <div class="aa">
      i am content
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import headers from './components/headers/headers'
import goods from './components/goods/goods'
export default {
  name: 'App',
  data() {
    return {
      activeName: 'first',
      seller:[]
    }
  },
  created() {
      //get seller
    this.$axios.get('../../static/data.json').then((response) => {
      this.seller = response.data.seller;
    })
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  components: {
    headers,
    goods
  }
}
</script>

<style lang="less">
a{text-decoration: none;transition: all .3s}

.tab{
  display: flex;
  justify-items: center;
  line-height: 40px;
  text-align: center;
  .tab-item{
    flex: 1;
    display: block;
    font-size: 14px;
    color:rgb(77,85,93)
  }
  .router-link-active{
    color:#f01414;
  }
}

</style>
