import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerObj:{
      "headLeftTitle":"",
      "headLeftValue":0,
      "headRightTitle":"",
      "headRightValue":0,
    },   
    dateObj:{
      "year":new Date().getFullYear(),
      "month":new Date().getMonth()+1
    }
  
  },
  mutations: {
    headChange(state,newObj) {
      state.headerObj = newObj;
    },
    newDate(state,newObj){
      // if(!newObj)return
      state.dateObj = newObj;
      // console.log(state.dateObj)
    }
  },
  getters: {
    getHeader(state) {
      return state.headerObj;
    },
    getDateObj(state) {
      // console.log(state.dateObj)
      return state.dateObj;
    }
  },
  actions: {
  },
  modules: {
  }
})
