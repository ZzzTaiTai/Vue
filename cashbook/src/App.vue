<template>
  <div id="app">
     <headers></headers>
    <div id="nav">
      <van-tabs v-model="active" type="card" boder  color='#ffffff' background='#5B5E63' title-active-color='#000000' title-inactive-color="#ffffff">
        <van-tab title="明细" :to="{name: 'home'}"></van-tab>
        <van-tab title="类别报表" :to="{name: 'about'}"></van-tab>
        <van-tab title=""></van-tab>
      </van-tabs>

    </div>
    <router-view/>
    <addCash></addCash> 
  </div>
</template>

<script>
import headers from "./components/headers";
import addCash from "./components/addCash";
export default {
  data() {
    return {
      active: '1',
    };
  },
  components: {
    headers,
    addCash
  },
  methods: {
    //  handleSelect(key, keyPath) {
    //   }
  }
};
</script>
<style lang="scss">
@import "./common/css/reset.scss";
  .van-tabs__nav--card,.van-tabs__nav--card .van-tab{
    margin:0!important;
    border:0!important;
  }
</style>
