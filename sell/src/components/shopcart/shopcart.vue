<template>
  <div class="shopcart">
      <div class="content ">
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
              <div class="minPrice">
                  ￥{{price}}起送
              </div>
          </div>
      </div>
  </div>
</template>

<script>
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
    data() {
        return {
            cartShow:false
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
            console.log(price)
            this.selectFoods.forEach(food => {
                price = price-(food.price *food.count);
            })
            return price
        }
    },

}
</script>

<style lang="less">
    .shopcart{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 50;
        width: 100%;
        height: 48px;
        line-height: 48px;

        .content{
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
                }
            }
        }

    }
</style>