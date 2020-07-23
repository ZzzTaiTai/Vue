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

// if (process.env.NODE_ENV !== 'production') require('./common/mock/user')
require('./common/mock/user')
Vue.config.productionTip = false

// Vue.use(Icon)
Vue.use(Tab).use(Tabs).use(Loading).use(Button).use(Form).use(Icon).use(Field).use(Popup).use(DropdownMenu).use(DropdownItem).use(DatetimePicker).use(Swipe).use(SwipeItem).use(NumberKeyboard).use(Cell).use(CellGroup);
const iconList = {
  'iconMap':[
    { className: "gongzi", name: "一般" },
    { className: "canyin", name: "餐饮" },
    { className: "gouwu", name: "购物" },
    { className: "fushi", name: "服饰" },
    { className: "jiaotong", name: "交通" },
    { className: "yule", name: "娱乐" },
    { className: "shejiao", name: "社交" },
    { className: "jujia", name: "居家" },
    { className: "tongxun", name: "通讯" },
    { className: "lingshi", name: "零食" },
    { className: "meirong", name: "美容" },
    { className: "yundong", name: "运动" },
    { className: "lvxing", name: "旅行" },
    { className: "shuma", name: "数码" },
    { className: "xuexi", name: "学习" },
    { className: "yiliao", name: "医疗" },
    { className: "shuji", name: "书籍" },
    { className: "chongwu", name: "宠物" },
    { className: "caipiao", name: "彩票" },
    { className: "qiche", name: "汽车" },
    { className: "bangong", name: "办公" },
    { className: "zhufang", name: "住房" },
    { className: "liwu", name: "礼物" },
    { className: "lijin", name: "礼金" },
    { className: "licai", name: "理财" }
  ],
  'dataImg':{
    "ICBC": {
      icon:"icon-gsyh",
      color:"#e64343"
    },
    "CCB": {
      icon:"icon-jsyh",
      color:"#1e2e8c"
    },
    "ABC": {
      icon:"icon-nyyh",
      color:"#060"
    },
    "BOC": {
      icon:"icon-zgyh",
      color:"#e64343"
    },
    "CMB": {
      icon:"icon-zsyh",
      color:"#e64343"
    },
    "HB": {
      icon:"icon-zhifubao",
      color:"#1296db"
    },
    "YEB": {
      icon:"icon-zhifubao",
      color:"#1296db"
    },
    "YE": {
      icon:"icon-zhifubao",
      color:"#1296db"
    }
  }
}
Vue.prototype.$axios = axios;
Vue.prototype.$toast = Toast;
Vue.prototype.$filters = mainfilters;
Vue.prototype.$icon = iconList;
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
