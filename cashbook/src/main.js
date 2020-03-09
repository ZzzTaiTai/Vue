import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mainfilters from './common/js/filters.js'
import { Icon, DatePicker, Menu, MenuItem, Button} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/common/css/iconfont.css'

Vue.config.productionTip = false

Vue.use(Icon).use(DatePicker).use(Menu).use(MenuItem).use(Button);
Vue.prototype.$axios = axios;

for(let key in mainfilters){
  Vue.filter(key,mainfilters[key]);
}
// Vue.filter('numFormat',function(value){
//   if(!value){return '0.00'}
//   //取数字整数部分
//   let intPart =  Math.trunc(value);
//   let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
//   let floatPart = '.00';
//   let valueAry = value.toString().split('.');
//   if(value.length === 2){
//     return intPartFormat+'.'+valueAry[1];
//   }else{
//     return intPartFormat+floatPart
//   }
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
