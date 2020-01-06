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
      <div class="cart-add iconfont icon-jiahao" @click="addCart" >
      </div>
  </div>

</template>

<script>

import {cartAdd,cartDecrease} from '@/common/js/util.js'
export default {
    props:{
       food:{
           type:Object
       }
    },
    inject:['handlecartAdd'],
    methods: {
        addCart(event){
            if(!event._constructed){
                return
            }
            //添加商品数量
            cartAdd(this.food)
            //调用添加球
            this.handlecartAdd(event.target) 
        },
        decreaseCart(event){
            if(!event._constructed){
                return
            }
           cartDecrease(this.food) 
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
                transform: rotate3d(0,0,1,180deg);
                transition: all .5s ease;
            }
            &.fade-enter, &.fade-leave-to{
                transform: translateX(30px);
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
                transition: opacity .1s;
            }
            &.fade-enter, .fade-leave-to {
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