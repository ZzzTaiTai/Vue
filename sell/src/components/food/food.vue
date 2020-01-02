<template>
  <transition name="fade">
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image">
          <img :src="food.image" alt="" />
          <div class="back" @click="hide">
            <i class="iconfont icon-houtui"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{ food.name }}</h1>
          <div class="detail">
            <span class="sell-count">月售{{ food.sellCount }}份</span>
            <span class="rating">好评率{{ food.rating }}%</span>
          </div>
          <div class="price">
            <span class="nowPrice">
              <em>￥</em>
              {{ food.price }}
            </span>
            <span class="oldPrice" v-show="food.oldPrice"
              >￥{{ food.oldPrice }}</span
            >
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @cartAdd="handlecartAdd" @cartDecrease="cartDecrease"></cartcontrol>
          </div>
          <div class="buy" v-show="!food.count || food.count === 0" @click="cartAdd">
            加入购物车
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BScroll from "better-scroll";
import cartcontrol from "../cartcontrol/cartcontrol";
export default {
  props: {
    food: {
      type: Object
    }
  },
  inject:['handlecartAdd','cartDecrease'],
  components: {
    cartcontrol
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.food, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    hide() {
      this.showFlag = false;
    },
    cartAdd(event) {
      if(!event._constructed){
          return
        }
      this.$emit('cartAdd', event.target,this.food) 
    }
  }
};
</script>

<style lang="less">
.food {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  background: #ffffff;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s;
  }
  &.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .back {
      position: absolute;
      top: 10px;
      left: 0;
      padding: 5px;
      i {
        display: block;
        padding: 5px;
        font-size: 20px;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
      }
    }
  }
  .content {
    position: relative;
    padding: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 700;
      color: rgb(7, 17, 27);
    }
    .detail {
      margin-bottom: 18px;
      line-height: 10px;
      font-size: 0;
      .sell-count,
      .rating {
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
      .sell-count {
        margin-right: 12px;
      }
    }
    .price {
      font-weight: 700;
      line-height: 24px;
      .nowPrice {
        margin-right: 8px;
        font-size: 14px;
        color: rgb(240, 20, 20);
      }
      .oldPrice {
        text-decoration: line-through;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
    }
    .cartcontrol-wrapper {
      position: absolute;
      right: 12px;
      bottom: 12px;
    }
    .buy {
      position: absolute;
      right: 18px;
      bottom: 18px;
      z-index: 10;
      height: 24px;
      line-height: 24px;
      padding: 0 12px;
      box-sizing: border-box;
      font-size: 10px;
      border-radius: 12px;
      color: #fff;
      background: rgb(0, 160, 220);
    }
  }
}
</style>
