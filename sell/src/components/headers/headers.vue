<template>
  <div class="headers">
    <div class="content-wrapper">
      <div class="avatar" >
        <img :src="seller.avatar" width="64" height="64" alt />
      </div>
      <div class="info">
        <div class="name">
          <span class="icoName"></span>
          <h2>{{seller.name}}</h2>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports" @click="showHideDetail">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
          <a class="num">{{seller.supports.length}}个
            <span class="iconfont icon-right"></span>
          </a>
        </div>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showHideDetail">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{ seller.bulletin }}</span>
      <i class="iconfont icon-right"></i>
    </div>
    <div class="bg">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
      </div>
       <transition name="fade">
      <div v-show="detailShow" class="detail" >
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">
              {{seller.name}}
            </h1>
            <div class="star-wrapper">
              <star :size="48" :score="seller.score"></star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index)  in seller.supports" :key="index">
                <span class="icon" :class="classMap[seller.supports[index].type]">
                  </span>
                  <em class="text">{{seller.supports[index].description}}</em>
                </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <span class="content">
                {{ seller.bulletin }}
              </span>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="showHideDetail">
          <i class="iconfont icon-close"></i>
        </div>
      </div>
       </transition>
  </div>
</template>

<script>
import star from '../star/star'
export default {
  name: "headers",
  props: ["seller"],
  components:{star},
  data() {
    return {
      detailShow:false
    };
  },
  created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
  },
  methods: {
    showHideDetail(){
      this.detailShow = !this.detailShow;
    },
  },
};
</script>

<style lang="less">
@import "../../common/css/mixin";
.headers {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background: rgba(7, 17, 27, .5);
  
  .content-wrapper {
    position: relative;
    display: flex;
    justify-items: center;
    padding: 24px 12px 18px 24px;
    .avatar {
      img {
        border-radius: 2px;
      }
    }
    .info {
      margin-left: 16px;
      .name {
        display: flex;
        align-items: center;
        margin: 2px 0 8px 0;
      }
      .icoName {
        display: inline-block;
        width: 30px;
        height: 18px;
        .bg-image("brand");
        background-size: 30px 18px;
        background-repeat: no-repeat;
      }
      h2 {
        margin-left: 6px;
        font-size: 16px;
        line-height: 18px;
        font-weight: bold;
      }
    }
    .description {
      margin-bottom: 10px;
      line-height: 12px;
      font-size: 12px;
    }
    .supports {
      vertical-align: top;
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease {
          .bg-image("decrease_1");
        }
        &.discount {
          .bg-image("discount_1");
        }
        &.guarantee {
          .bg-image("guarantee_1");
        }
        &.invoice {
          .bg-image("invoice_1");
        }
        &.special {
          .bg-image("special_1");
        }
      }
      .text {
        line-height: 12px;
        font-size: 10px;
      }
      .num {
        position: absolute;
        right: 18px;
        bottom: 15px;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        font-weight: 200;
        font-size: 10px;
        border-radius: 50px;
        color: #fff;
        background: rgba(0, 0, 0, 0.2);
        span{
          font-size: 10px;
        }
      }
    }
  }
  .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, .5);

    .bulletin-title {
      display: inline-block;
      width: 22px;
      height: 12px;
      vertical-align: top;
      margin-top: 7px;
      .bg-image("bulletin");
      background-size: 22px 12px;
      background-repeat: no-repeat;
    }
    .bulletin-text {
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
    }
    i {
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  .bg{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter:blur(10px);
  }
  .detail{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 100;
    background-color: rgba(7, 17, 27, .8);
     &.fade-enter-active, &.fade-leave-active{
        transition: all .5s;
    }
    &.fade-enter, &.fade-leave-to {
       opacity: 0;
    }
    .detail-wrapper{
      width: 100%;
      min-height:100%;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        .name{
          line-height: 16px;
          font-size: 16px;
          color: rgb(255,255,255);
          font-weight: 700;
          text-align: center;
        }
        .star-wrapper{
          margin-top: 18px; 
          padding: 2px 0;
          text-align: center;
        }
        .title{
          display: flex;
          width: 80%;
          margin: 28px auto 24px;
          .line{
            flex: 1;
            position: relative;
            top: -6px;
            border-bottom: 1px solid rgba(255, 255, 255, .2);
          }
          .text{
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }
        }
        .supports{
          width: 80%;
          margin: 0 auto;
          .support-item{
            padding:0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child{
              margin-bottom: 0;
            }
            .icon{
                display: inline-block;
                width: 16px;
                height: 16px;
                vertical-align: top;
                margin-right: 6px;
                background-size: 16px 16px;
                background-repeat: no-repeat;
                &.decrease {
                  .bg-image("decrease_2");
                }
                &.discount {
                  .bg-image("discount_2");
                }
                &.guarantee {
                  .bg-image("guarantee_2");
                }
                &.invoice {
                  .bg-image("invoice_2");
                }
                &.special {
                  .bg-image("special_2");
                }
              }
              .text{
                line-height: 16px;
                font-size: 12px;
                font-weight: 200;
                color:rgb(255, 255, 255)
              }
          }
        }
        .bulletin{
          width: 80%;
          margin: 0 auto;
          .content{
            padding:0 12px;
            line-height: 24px;
            font-size: 12px;
          }
        }
      }
    }
    .detail-close{
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto;
      i{font-size: 32px;}
    }
  }
}
</style>
