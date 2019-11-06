import Vue from 'vue'
import VueRouter from 'vue-router'
import todoList from '@/components/todoList'
import home from '@/components/home'
import appHome from '@/components/page/appHome'
import appList from '@/components/page/List'
import appCar from '@/components/page/Car'
import appPersonal from '@/components/page/Personal'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes:[
     {path: '/todoList',name:'todoList',component:todoList},
     {path: '/home',name:'home',component:home},
     {path: '/appHome',name:'appHome',component:appHome},
     {path: '/appList',name:'appList',component:appList},
     {path: '/appCar',name:'appCar',component:appCar},
     {path: '/appPersonal',name:'appPersonal',component:appPersonal},
     {path: '/*',redirect:'/home'},
    ]
   })
 export default router