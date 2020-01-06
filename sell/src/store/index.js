import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        goods:[]
    },
    mutations:{
        save_goods(state,data){
            state.goods = data
        },
        // cartAdd(state,food){
        //     console.log(food)
        //     if(!food.count){
        //         Vue.set(food, 'count', 1);
        //       }else{
        //         food.count++;
        //       }
        // },
        // cartDecrease(state,food){

        // }
    }
})
export default store