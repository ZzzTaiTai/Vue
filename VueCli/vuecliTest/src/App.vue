<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <!-- <p>导航 ：
   <router-link to="/">首页</router-link>
   <router-link to="/hi">Hi页面</router-link>
    <router-link :to="{name:'Hi1',params:{username:'Tai',id:'888'}}">Hi1页面</router-link>
     <router-link to="/hi/hi2">Hi2页面</router-link>
  </p>
  <p>{{ $route.name }}</p> -->
  <div>
    <button @click="goGo">前进</button>
    <button  @click="goBack">后退</button>
    <button @click="goHome">返回主页</button>
  </div>
     <router-link to="/">Home</router-link>|
   <router-link to="/params/123/Very good">params</router-link>|
   <router-link to="/goHome">goHome</router-link>|
   <router-link to="/goParams/321/Very go321od">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/Tai">Tai</router-link>|
       <router-link to="/Error">Error</router-link>|
    <transition name="fade" mode="out-in">
      <router-view/>

    </transition>

  </div>
    
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
opacity: 1;
}
.fade-leave-active{
transition: opacity .3s;
opacity: 0;
}
</style>
