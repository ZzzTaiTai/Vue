// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button, Select, Tabs, TabPane } from 'element-ui'
import store from './store'

import '@/common/css/index.less'
import '@/common/css/iconfont.css'
import '@/../static/css/reset.css'
Vue.config.productionTip = false

Vue.use(Button).use(Select).use(Tabs).use(TabPane)
Vue.prototype.$axios = axios
/* eslint-disable no-new */

Vue.filter('dateFormat',function(value) {
  if(!value)return;
  value = new Date(value);
  var Y = value.getFullYear();
  var M = value.getMonth();
  var D = value.getDate();
  var h = value.getHours();
  var m = value.getMinutes(); 

  return Y+"-"+zero(M)+"-"+zero(D)+"  "+zero(h)+":"+zero(m)
  function zero(num){
    return num>10?num:"0"+num;
  }
})
new Vue({
  el: '#app',
  router,
  axios,
  store,
  render: h => h(App)
})
