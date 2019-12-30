<template>
  <div class="shopcart">
      <div class="content" @click="tiggerList">
          <div class="content-left " :class="{'highlight':totalCount > 0}" >
              <div class="logo-warpper ">
                  <div class="logo">
                      <span class="icon-gouwuche iconfont"></span>
                  </div>
                  <div class="totalNum" v-show="totalCount > 0">{{totalCount}}</div>
                
              </div>
              <div class="price">￥{{totalPrice}}</div>
              <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
              
          </div>
          <div class="content-right">
              <div class="minPrice" :class="{reachPrice:reachPrice}">
                  <span v-show="!reachPrice">还差￥{{price}}起送</span>
                  <span class="settlement" v-show="reachPrice">去结算</span>
              </div>
          </div>
      </div>
    <div class="ball-container">
        <div v-for="ball in balls">
                    <transition  
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        name='drop'>
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                    </transition>
        </div> 
    </div>
    <transition name="fold">
            <div class="shopcart-lists"  v-show="listShow">
                <div class="list-header">
                    <h1 class="title">购物车</h1>
                    <span class="empty" @click="empty">清空</span>
                </div>
                <div class="list-content" ref="listContent">
                    <ul>
                        <li class="food" v-for="food in selectFoods">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.price*food.count}}</span>
                            </div>
                            <div class="cartcontrol-wrapper">
                                <cartcontrol :food="food" ></cartcontrol>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </transition>

  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol'
export default {
    props:{
        selectFoods:{
            type:Array,
            default:function(){
                return [];
            }
        },
        deliveryPrice:{
            type:Number,
            default: 0
        },
        minPrice:{
            type:Number,
            default: 0
        }
    },
    components:{
        cartcontrol:cartcontrol
    },
    data() {
        return {
            cartShow:false,
            balls: [{show: false}, {show: false}, {show: false}, {show: false}, {show: false}],
            dropBalls: [], // 用dropBalls来存放掉落的小球
            fold:true
        }
    },
    computed: {
        totalPrice(){
            let total = 0;
            this.selectFoods.forEach(food => {
                total +=food.price *food.count;
            });
            return total
        },
        totalCount(){
            let count = 0;
            this.selectFoods.forEach(food => {
                count += food.count;
            })
            return count
        },
        price(){
            let price = this.minPrice; 
            this.selectFoods.forEach(food => {
                price = price-(food.price *food.count);
            })
             return price
        },
        listShow(){
            if(!this.totalCount){
                this.fold = true;
                return false;
            }
            let show = !this.fold;
            if(show) {
                this.$nextTick(() => {
                    if(!this.scroll) {
                        this.scroll = new BScroll(this.$refs.listContent, {
                            click:true
                        })
                    }else{
                        this.scroll.refresh();
                    }
                    
                })
            }
            this.$emit('func',show)
            return show;
        },
        reachPrice(){
            let price = this.price;
            if(price>0){
                return false
            }else{
                return true
            }
        }
    },
    methods: {
        drop(el){
            for(let i = 0; i<this.balls.length;i++){
                let ball = this.balls[i];
                if(!ball.show){
                    ball.show = true;
                    ball.el = el;
                    this.dropBalls.push(ball);
                    return
                }
            }
        },
        beforeEnter(el) {
          let count = this.balls.length;
          while(count--){
              let ball = this.balls[count];
              if(ball.show){
                  let rect = ball.el.getBoundingClientRect();
                  let x = rect.left-32;
                  let y = -(window.innerHeight-rect.top-22);
                  el.style.display = '';
                el.style.webkitTransform = 'translate3d(0,' + y + 'px,0)';
                el.style.transform = 'translate3d(0,' + y + 'px,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = 'translate3d(' + x + 'px,0, 0)';
                inner.style.transform = 'translate3d(' + x + 'px, 0, 0)';
              }
          }
        },
        enter(el){
            let rf = el.offsetHeight;
            this.$nextTick(()=>{
                el.style.webkitTransform = 'translate3d(0,0,0)';
                el.style.transform = 'translate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = 'translate3d(0,0,0)';
                inner.style.transform = 'translate3d(0,0,0)';
            })
        },
        afterEnter(el){
            let ball =this.dropBalls.shift();
            if(ball){
                ball.show=false;
                el.style.display="none"
            }
        },
        tiggerList(){
            if(!this.totalCount){
                return
            }
            this.fold =!this.fold;
        },
        empty(){
            this.selectFoods.forEach((food) =>{
                food.count = 0;
            })
            this.$emit('func',this.fold)

        } 
    },
}
</script>

<style lang="less">
@import "../../common/css/mixin";
    .shopcart{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 48px;
        line-height: 48px;
        z-index: 50;
        .content{
            position: relative;
            display: flex;
            background: #141d27; 
            font-size: 0;
            .content-left{
                flex: 1;
                .logo-warpper{
                    position: relative;
                    top: -10px;
                    left: 0;
                    display: inline-block;
                    vertical-align: top;
                    width: 56px;
                    height: 56px;
                    margin:0 12px;
                    padding: 6px;
                    font-size: 24px;
                    border-radius: 50%;
                    background: #141d27; 
                    box-sizing: border-box;
                    .logo{
                        width: 100%;
                        height: 100%;
                        line-height: 38px;
                        text-align: center;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, .2);
                        color:rgba(255, 255, 255, .4)
                    }
                }
                .price,.desc{
                    display: inline-block;
                    font-size: 12px;
                    color: rgba(255, 255, 255, .4);
                    font-weight: 700; 
                }
                .price{
                    vertical-align: top;
                    margin-top: 12px;
                    line-height: 24px;
                    padding-right: 12px;
                    box-sizing: border-box;
                    border-right: 1px solid rgba(255, 255, 255, .1);
                }
                .desc{
                    padding-left:12px;
                }
                &.highlight{
                    .logo-warpper{
                        .logo{
                            color: rgb(255, 255, 255);
                            background: rgb(0, 160, 220);
                        }
                        .totalNum{
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 24px;
                            height: 16px;
                            line-height: 16px;
                            text-align: center;
                            font-size: 9px;
                            font-weight: 700;
                            color: rgb(255, 255, 255);
                            background: rgb(240, 20, 20);
                            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, .4);
                            border-radius: 6px;
                        } 
                    }
                    .price{
                        color: rgb(255, 255, 255); 
                    }
                     
                } 
            }
            .content-right{
                flex:0 0 105px;
                .minPrice{
                    font-size: 12px;
                    color: rgba(255, 255, 255, .4);
                    font-weight: 700; 
                    line-height: 48px;
                    background: rgba(255, 255, 255, .2);
                    text-align: center;
                    &.reachPrice{
                        background: rgb(1, 156, 55);
                        color:#ffffff;
                    }
                }
            }
        }
            .ball-container{
                .ball{
                    position: fixed;
                    left:32px;
                    bottom:22px;
                    z-index: 200;
                    &.drop-enter,&.drop-enter-active{
                        transition:all 0.4s cubic-bezier(0.49,-0.29,0.75,0.41)
                    }
                    .inner{
                        width:16px;
                        height: 16px;
                        border-radius: 50%;
                        background: rgb(0,160,220);
                        transition: all 0.4s linear;
                        }
                    }
            }
            .shopcart-lists{
                position: absolute;
                left: 0;
                bottom:48px;
                z-index: -1;
                width: 100%;
                &.fold-enter-active{
                    transition: all .5s;
                    transform:translate3d(0,0,0);
                }
                 &.fold-leave-active{
                    transition: all .5s;
                    transform:translate3d(0,100%,0);
                 }
                &.fold-enter{
                     transform:translate3d(0,100%,0);
                }
                &.fold-leave{
                    transform:translate3d(0,0,0);
                }
                .list-header{
                    padding:0 18px;
                    height: 40px;
                    line-height: 40px;
                    background: #f3f5f7;
                    border-bottom: 1px solid rgba(7, 17, 27, .1);
                    .title{
                        float: left;
                        font-size: 14px;
                        color:rgb(7,17,27)
                    }
                    .empty{
                        float: right;
                        font-size: 12px;
                        color: rgb(0, 160, 220)
                    }
                }
                .list-content{
                    padding:0 18px;
                    max-height: 217px;
                    overflow: hidden;
                    background: #ffffff;
                    .food{
                        position: relative;
                        box-sizing: border-box;
                        padding:12px 0;
                        .border-1px(rgba(7, 17, 27, .1));
                        line-height: 100%;
                        .name{
                            line-height: 24px;
                            font-size: 14px;
                            color:rgb(7,17,27);
                        }
                        .price{
                           position: absolute;
                           right: 90px;
                           bottom: 12px;
                           line-height: 24px;
                           font-size: 14px;
                           font-weight: 700;
                           color:rgb(240, 20, 20);
                        }
                        .cartcontrol-wrapper{
                            position: absolute;
                            right: 0;
                            bottom:0;
                        }
                    }


                }
            }
    }
</style>