<template>
  <div id="app">
     <headers></headers>

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
