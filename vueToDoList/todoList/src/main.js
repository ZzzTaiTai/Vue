// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/router'
import App from './App'
import { Icon,Button,Tabbar,TabbarItem, Lazyload, CellGroup,Cell,NavBar,Search,Tag,Slider,Row, Col} from 'vant';
import 'vant/lib/index.css';
// import 'lib-flexible/flexible'
Vue.config.productionTip = false
Vue.use(Icon).use(Button).use(Tabbar).use(TabbarItem).use(NavBar ).use(Search).use(Slider)
.use(Lazyload).use(CellGroup).use(Cell).use(Tag).use(Row).use(Col)
/* eslint-disable no-new */
Vue.filter("toFixed",(value,val=2)=>{
  if (!value) return ''
  return parseInt(value).toFixed(val)
})
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>',
  render:(h)=>h(App)
});
// let W=document.documentElement.clientWidth||document.body.clientWidth;
// document.documentElement.style.fontSize=W/750 *100 +"px";
