<template>
  <div id="app">
    <headers></headers>
    <div id="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#5B5E63"
        text-color="#fff"
        active-text-color="#000"
      >
        <el-menu-item index="1"><router-link :to="{name: 'home'}">明细</router-link></el-menu-item>
        <el-menu-item index="2"><router-link :to="{name: 'about'}">类别报表</router-link></el-menu-item>
      </el-menu>
    </div>
    <router-view />
    <addCash></addCash>
  </div>
</template>

<script>
import headers from "./components/headers";
import addCash from "@/components/addCash.vue";
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  components: {
    headers,
    addCash
  },
  methods: {
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
};
</script>
<style lang="scss">
@import "./common/css/reset.scss";
.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-menu-item.is-active,.el-menu.el-menu--horizontal{
  border:0!important;
  border-bottom-color:transparent!important;
}
.el-menu-item.is-active {
  background-color: #fff!important;
}
.el-menu--horizontal>.el-menu-item{
  height: 40px!important;
  line-height: 40px!important;
  width: 25%!important;
  text-align: center;
}
</style>
