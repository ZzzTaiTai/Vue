<template>
  <div class="cartcontrol">
      <transition name="fade">
      <div class="cart-decrease " v-show="food.count>0" @click="decreaseCart" >
            <span class="iconfont icon-jianhao"></span>
      </div>
      </transition>
      <transition name="fade">
      <div class="cart-count" v-show="food.count>0">
          {{food.count}}
      </div>
      </transition>
      <div class="cart-add iconfont icon-jiahao" @click="addCart">
      </div>
  </div>

</template>

<script>
import Vue from 'vue';
export default {
    props:{
       food:{
           type:Object
       }
    },
    data() {
        return {
            
        }
    },
    methods: {
        addCart(event){
            if(!event._constructed){
                return
            }
            if(!this.food.count){
                Vue.set(this.food, 'count', 1);
       
            }else{
                this.food.count++;
            }
        },
        decreaseCart(event){
            if(!event._constructed){
                return
            }
            if(this.food.count === 1){
                Vue.set(this.food, 'count', 0);
            }else{
                this.food.count--;
            }
        }
    },

}
</script>

<style lang="less">
    .cartcontrol{
        font-size: 0;
        .cart-decrease{
            display: inline-block;
            padding:6px;
            span{
                line-height: 24px;
                font-size: 24px;
                color: rgb(0, 160, 220);
            }
            &.fade-enter-active, &.fade-leave-active {
                transition: opacity .3s;
            }
            &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }
        }
        .cart-count{
            display: inline-block;
            vertical-align: top;
            padding-top: 6px;
            width:12px;
            text-align: center;
            line-height: 24px;
            font-size: 12px;
            color:rgb(7, 17, 27);
            &.fade-enter-active, &.fade-leave-active {
                transition: opacity .3s;
            }
            &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
                opacity: 0;
            }

        }
        .cart-add{
            display: inline-block;
            padding:6px;
            line-height: 24px;
            font-size: 24px;
            color: rgb(0, 160, 220);
        }
    }
</style>