<template>
  <div class="seller">
    <div class="seller-info">
      <div class="top-warpper">
        <h1 class="title">{{ seller.name }}</h1>
        <div class="star-warpper">
          <star :size="36" :score="seller.score"></star>
      </div>
        <span class="ratingCount">({{ seller.ratingCount }})</span>
        <span class="sellCount">月售{{ seller.sellCount }}单</span>
        <div class="collect" @click="tiggerCollect($event)">
        <i class="iconfont icon-shoucang2 ":class="{isCollect:'active'}"></i>
        <p>{{isCollectText}}</p>
      </div>
      </div>
      <div class="other">
        <div class="minPrice">
          <h2 class="title">起送价</h2>
          <p>{{seller.minPrice}}<em>元</em></p>
        </div>
        <div class="deliveryPrice">
          <h2 class="title">商家配送</h2>
          <p>{{seller.deliveryPrice}}<em>元</em></p>
        </div>
        <div class="deliveryTime">
          <h2 class="title">平均配送时间</h2>
          <p>{{seller.deliveryTime}}<em>分钟</em></p>
        </div>
      </div>
    </div>
    <split></split>
    <div class="notice-content" v-show="seller.bulletin">
      <h1 class="title">公告与活动</h1>
      <p class="info">{{ seller.bulletin }}</p>
      <ul v-if="seller.supports" class="supports">
      <li
        class="support-item"
        v-for="(item, index) in seller.supports"
        :key="index"
      >
        <span class="icon" :class="classMap[seller.supports[index].type]">
        </span>
        <em class="text">{{ seller.supports[index].description }}</em>
      </li>
    </ul>
    </div>
    <split></split>
    <div class="pics-content" v-show="seller.pics">
      <h1 class="title">商家实景</h1>
      <div class="pic-wrapper" ref="sellerImgList">
        <ul class="imgList" ref="imgList">
            <li class="pic-item" v-for="(item,index) in seller.pics" :key="item.id">
              <img :src="item" width="120" height="90">
            </li>
          </ul>
      </div>
    </div>
    <split></split>
    <div class="information-content" v-show="seller.infos">
      <h1 class="title">商家信息</h1>
     <div class="informationList">
       <ul>
         <li class="info-item" v-for="(info,index) in seller.infos" :key="index">{{info}}</li>
       </ul>
     </div>
    </div>
  </div>
</template>

<script>
import {saveToLocal,loadFromlLocal} from '@/common/js/util.js'
import BScroll from "better-scroll";
import split from '../../components/split/split'
import star from '../../components/star/star'
export default {
  components:{
    star,
    split
  },
  data() {
    return {
      isCollect:false,

    }
  },
  created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
    this._initPics();
    
  },
  computed: {
    seller(){
      return this.$store.state.seller
    },
    isCollectText(){
      return this.isCollect?'已收藏':'收藏'
    },
    favorite(){
      return loadFromlLocal(this.seller.id,'seller',false)
    }
  },
  watch: {
    seller(){
      this._initPics();
    }
  },
  methods: {
    tiggerCollect(){
      this.isCollect = !this.isCollect;
      saveToLocal(this.seller.id,'seller',this.isCollect)
    },
    _initPics(){
      if(this.seller.pics){
        let picWidth = 120;
        let margin =6;
        let width = picWidth * this.seller.pics.length;
         if(!this.picScroll){
          this.$nextTick(() =>{
              this.$refs.imgList.style.width = width + 'px';
              this.picScroll = new BScroll(this.$refs.sellerImgList,{
                startX: 0,
                click: true,
                scrollX: true,
                scrollY: false,
                eventPassthrough: 'vertical'
              });
          });
        }else{
          this.picScroll.refresh();
        }
      }
    }
  },
};
</script>

<style lang="less">
@import "../../common/css/mixin";
.seller{
  .title{
    margin-bottom:8px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7,17,27);
  }
  .seller-info{
    padding: 0 18px;
    .top-warpper{
      position: relative;
      padding: 18px 0;
      .star-warpper{display: inline-block;}
      .ratingCount{
        display: inline-block;
        line-height: 16px;
        font-size: 10px;
        color: rgb(77,85,93);
        margin: 0 12px 0 8px;
        vertical-align: top;
        }
      .sellCount{
        display: inline-block;
        line-height: 16px;
        font-size: 10px;
        color: rgb(77,85,93);
        vertical-align: top;
      }
      .collect{
        position: absolute;
        right: 10px;
        top: 18px;
        text-align: center;
        width: 36px;
        .iconfont{
          line-height: 24px;
          font-size: 24px;
          color: rgb(249,199,61);
          &.active{
            color: rgb(77,85,93);
          }
        }
        p{
          margin-top: 4px;
          line-height: 10px;
          color: rgb(77,85,93);
          font-size: 10px;
        }
      }
    }
    .other{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px 0; 
      border-top:1px solid rgba(7,17,27,.1);
      div{
        flex: 1;
        text-align: center;
        border-left: 1px solid rgba(7,17,27,.1);
        &:first-child{
          border:0;
        }
        .title{
          line-height: 10px;
          font-size: 10px;
          color:rgb(147, 153, 159);
        }
        p{
          line-height: 24px;
          font-size: 24px;
          font-weight: 200;
          color:rgb(7, 17, 27);
          em{
            line-height: 10px;
            font-size: 10px;

          }
          }
      }
    }
  }
  .notice-content{
    padding:18px;
    .info{
      padding: 0 12px;
      line-height: 24px;
      font-size: 12px;
      color: rgb(240, 20, 20);
    }
    .supports{
      margin-top: 16px;
      .support-item{
        padding:16px 12px;
        line-height: 16px;
        border-top: 1px solid rgba(7,17,27,.1);
        font-size: 12px;
        font-weight: 200;
        color:rgb(7, 17, 27);
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 4px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease {
            .bg-image("decrease_4");
          }
          &.discount {
            .bg-image("discount_4");
          }
          &.guarantee {
            .bg-image("guarantee_4");
          }
          &.invoice {
            .bg-image("invoice_4");
          }
          &.special {
            .bg-image("special_4");
          }
        }
      }
    }
  }
  .pics-content{
    padding:18px 0 18px 18px;
    .pic-wrapper{
      width: 100%;
      overflow: hidden;
      white-space: nowrap ;
      .pic-item{
        display: inline-block;
        margin-right: 6px
      }
    }
  }
  .information-content{
    padding:18px;
    .info-item{
        padding:16px 12px;
        line-height: 16px;
        border-top: 1px solid rgba(7,17,27,.1);
        font-size: 12px;
        font-weight: 200;
        color:rgb(7, 17, 27);
    }
  }
}
</style>
