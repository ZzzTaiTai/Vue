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
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <div
            class="buy"
            v-show="!food.count || food.count === 0"
            @click="cartAdd"
          >
            加入购物车
          </div>
        </div>
        <split v-show="food.info"></split>
        <div class="info-content" v-show="food.info">
          <h1 class="title">商品介绍</h1>
          <p class="info">{{ food.info }}</p>
        </div>
        <split v-show="food.ratings"></split>
        <div class="ratings-content">
          <h1 class="title">商品评价</h1>
          <ratingselect
            :select-type="selectType"
            :only-content="onlyContent"
            :desc="desc"
            :ratings="food.ratings"
            @changes-type="changesType"
            @changes-only="changesOnly"
          ></ratingselect>
          <div class="ratings">
            <div class="time"></div>
            <div class="user">
              <span class="name"></span>
              <img src="" alt="" />
            </div>
            <div class="rating-warpper">
              <ul v-show="food.ratings && food.ratings.length">
                <li  class="item" v-for="(item,index) in food.ratings">
                  <div class="user">
                    <span class="userName">{{item.username}}</span>
                    <img class="avatar" :src="item.avatar" alt="" width="12" height="12">
                  </div>
                  <div class="time">{{item.rateTime}}</div>
                  <p class="text">
                    <i class="iconfont" :class="{'icon-haoping':item.rateType === 0,'icon-chaping:':item.rateType === 1}"></i>
                    <span>{{item.text}}</span>
                  </p>
                </li>
              </ul>
              <div class="no-rating" v-show="!food.ratings || !food.ratings.length">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { cartAdd } from "@/common/js/util.js";
import BScroll from "better-scroll";
import cartcontrol from "../cartcontrol/cartcontrol";
import split from "../split/split";
import ratingselect from "../ratingselect/ratingselect";

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default {
  props: {
    food: {
      type: Object
    }
  },
  inject: ["handlecartAdd"],
  components: {
    cartcontrol,
    ratingselect,
    split
  },
  data() {
    return {
      showFlag: false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: "全部",
        positive: "推荐",
        negative: "吐槽"
      }
    };
  },
  methods: {
    changesType(type) {
        this.selectType = type;
    },
    changesOnly() {
      this.onlyContent = !this.onlyContent;
    },
    show() {
      this.showFlag = true;
      this.selectType = ALL;
      this.onlyContent = true;
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
      if (!event._constructed) {
        return;
      }
      cartAdd(this.food);
      this.handlecartAdd(event.target);
    }
  }
};
</script>

<style lang="less">
@import "../../common/css/mixin";
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
    .border-1px(rgba(7, 17, 27, 0.1));
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
  .info-content {
    padding: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 6px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .info {
      line-height: 24px;
      padding: 0 8px;
      font-size: 12px;
      color: rgb(77, 85, 93);
    }
  }
  .ratings-content {
    padding-top: 18px;
    .title {
      line-height: 14px;
      margin-bottom: 6px;
      font-size: 14px;
      color: rgb(7, 17, 27);
    }
    .rating-warpper{
      padding: 0 18px;
      .item{
        position: relative;
        padding: 16px 0;
        .border-1px(rgba(7,17,27,.1));
        .user{
          position: absolute;
          right: 0;
          top: 16px;
          line-height: 12px;
          font-size: 0;
          .userName{
            display: inline-block;
            color: rgb(147, 153, 159);
            vertical-align: top;
            font-size: 10px;
            margin-right:6px;
          }
          .avatar{
            border-radius: 50%;
          }
        }
        .time{
          margin-bottom: 6px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147, 153, 159);

        }
        .text{
          font-size: 12px;
          line-height: 16px;
          color: rgb(7, 17, 27);
          .iconfont{
            margin-right: 4px;
            line-height: 16px;
            font-size: 12px;
            &.icon-haoping{
              color:rgb(0, 160, 220);
            }
          }
        }

      }
    }
  }
}
</style>
