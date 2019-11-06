<template>
  <div>
    <van-tabbar v-model="index">
        <van-tabbar-item icon="wap-home-o" to="/appHome">首页</van-tabbar-item>
        <van-tabbar-item icon="points" to="/appList">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" info="5" to="/appCar">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact" info="99+" to="/appPersonal">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
    name:"tabBar",
    data() {
        return {
        }
    },
    computed: {
        index:{
            get(){return this.active},
            set(){}
        }
    },
    props:['active']
}

</script>
<style>
</style>