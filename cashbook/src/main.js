import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mainfilters from './common/js/filters.js'
import 'vant/lib/index.css';
// import { showLoading, hideLoading } from './common/js/loading';
// import { Icon} from 'element-ui'
import { Tab, Tabs, Loading, Toast, Button, Form, Icon, Field, Popup, DropdownMenu, DropdownItem, DatetimePicker, Swipe, SwipeItem, NumberKeyboard, Cell, CellGroup  } from 'vant'

// import 'element-ui/lib/theme-chalk/index.css'


import '../src/common/css/iconfont.css'
import '../src/common/css/iconfont.css'
import '../src/common/js/rem'

if (process.env.NODE_ENV !== 'production') require('./common/mock/user')
Vue.config.productionTip = false

// Vue.use(Icon)
Vue.use(Tab).use(Tabs).use(Loading).use(Button).use(Form).use(Icon).use(Field).use(Popup).use(DropdownMenu).use(DropdownItem).use(DatetimePicker).use(Swipe).use(SwipeItem).use(NumberKeyboard).use(Cell).use(CellGroup);
Vue.prototype.$axios = axios;
Vue.prototype.$toast = Toast;
Vue.prototype.$filters = mainfilters;

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
// }
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
