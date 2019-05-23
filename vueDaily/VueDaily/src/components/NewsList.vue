<template>
  <div class="NewsList wrapper" >
    <div class="piece" v-for="(itemL,indexL) in nList" :key="indexL" >
      <p class="time" v-if ="!itemL[0].time">今日新聞</p>
      <p class="time" v-else>{{itemL[0].time}}</p>
      <div class="clear"></div>
    <div class="newsItem" id="newsItem" v-for="(item,index) in nList[indexL]" :key="index" >
      <div class="list" >
        <router-link v-bind:to="{name:'Details',params:{NewsId:item.id}}">
        <img :src="item.images[0]" alt="">
        <span class="text">{{item.title}}</span>
        </router-link>
      </div>
    </div>
    </div>
    <div v-if="isLoading == true">
      <p class="isLoading">加载中 <i class="fa fa-spinner fa-spin"></i></p>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: "NewsList",
  props: ["NewsL","isLoading",'getscroll'],
  data() {
    return {
      nList: [],
      scrollNum: 0
    };
  },
  watch: {
    NewsL(val) {
      this.nList = val;
      this.$nextTick(()=>{
        this.$emit('getscroll');
      })
    },
  },
  updated(){
    
  },
  created(){
    
  },
  methods: {

  }
};
</script>

<style scoped>
.isLoading{
  text-align: center;
  color: #666;
  font-size: 16px;
}
.newsItem .list {
  margin: 0 auto;
  width: 90%;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 1px #aaaaaa;
  z-index: 2;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 5px;
}
.newsItem .list a{
    font-size: 14px;
    margin-left: 15px;
    text-align: left;
    color:#333;
    display: flex;
    display: -webkit-flex;
    align-items: center;
}
.newsItem .list img {
  height: 70px;
}
.newsItem .list span.text {
  font-size: 14px;
  margin-left: 15px;
}
.NewsList p.time{
  float: left;
  margin: 10px 25px!important;

}
</style>
