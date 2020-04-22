import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerText:{
      "headLeftTitle":"",
      "headRightTitle":"",
    }, 
    headerVal:{
      "headLeftValue":0,
      "headRightValue":0,
    },  
    dateObj:{
      "year":new Date().getFullYear(),
      "month":new Date().getMonth()+1
    }
  },
  mutations: {
    headTextChange(state,newObj) {
      state.headerText = newObj;
    },
    headValChange(state,newObj) {
      state.headerVal = newObj;
    },
    newDate(state,newObj){
      // if(!newObj)return
      state.dateObj = newObj;
      // console.log(state.dateObj)
    }
  },
  getters: {
    getHeaderText(state) {
      return state.headerText;
    },
    getHeaderVal(state) {
      return state.headerVal;
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
