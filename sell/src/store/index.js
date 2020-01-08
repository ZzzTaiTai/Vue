import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        seller:[]
    },
    mutations:{
        save_seller(state,data){
            state.seller = data
        },
    }
})
export default store