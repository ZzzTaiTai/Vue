import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import { setlocalStorage } from '../common/js/util'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      requireAuth:true
    },
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */'../views/user/login.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import(/* webpackChunkName: "about" */'../views/user/regist.vue')
  },
  {
    path: '/addCash/:id',
    name: 'addCash',
    props: (route) => ({ id : route.params.id, pMoneny : route.query.moneny, pCurrentDate : route.query.cDate, pAccountIndex : route.query.index, pValue : route.query.value,noInfo : true}),
    component: () => import(/* webpackChunkName: "addCash" */'../components/addCash.vue')
  },
  {
    path: '/infos/:id',
    name: 'infos',
    props: (route) => ({ id : route.params.id}),
    component: () => import(/* webpackChunkName: "infos" */'../components/infos.vue')
  }
]

const router = new VueRouter({
  // mode:'history',
  routes
})
router.beforeEach((to,from,next) =>{
  if(to.meta.requireAuth){
    if(localStorage.getItem('token')){
      next();
    }else{
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      });
    }
  }else{
    next();
  }
})

export default router
