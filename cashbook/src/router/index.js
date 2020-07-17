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
    props: (route) => ({ id : route.params.id }),
    component: () => import(/* webpackChunkName: "addCash" */'../components/addCash.vue')
  }
]

const router = new VueRouter({
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
