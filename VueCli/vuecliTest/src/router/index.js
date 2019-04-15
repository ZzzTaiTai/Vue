import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Error from '@/components/Error'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name:"HelloWorld",
      component:HelloWorld
    },
    {
      path:"/params/:newId(\\d+)/:newTitle",
      component:Params
      // beforeEnter:(to,form,next)=>{
      //   console.log(to);
      //   console.log(form);
      //   next();
      //   // next({path:'/'});
      // }
    },
    {
      path:"/goHome",
      redirect:"/"
    },
    {
      path:"/goParams/:newId(\\d+)/:newTitle",
      redirect:"/params/:newId(\\d+)/:newTitle"
    },
    {
      path:"/Hi1",
      component:Hi1,
      alias:"/Tai"
    },
    {
      path:"*",
      component:Error,
    }
    
    // {
    //   path:'/Hi',
    //   component: Hi,
    //   children:[
    //     {path:'/',name: 'Hi',component:Hi},
    //     {path:'hi1',name: 'Hi1',component:Hi1},
    //     {path:'hi2',name: 'Hi2',component:Hi2}
    //   ]
    // }
  ]
})
