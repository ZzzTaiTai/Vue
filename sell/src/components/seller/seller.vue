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
        <div class="collect">
        <i class="iconfont icon-aixin" :class="{}"></i>
        <p v-show="true">收藏</p>
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
     <div class="imgList">
       <div class="item" v-for="(item,index) in seller.pics" :key="index"><img :src="item" alt="" width="120" height="90"></div>
     </div>
    </div>
    <div class="information-content" v-show="seller.infos">
      <h1 class="title">商家信息</h1>
     <div class="informationList">
       <ul>
         <li v-for="(info,index) in seller.infos" :key="index">{{info}}</li>
       </ul>
     </div>
    </div>
  </div>
</template>

<script>
import split from '../../components/split/split'
import star from '../../components/star/star'
export default {
  components:{
    star,
    split
  },
  created() {
    this.classMap = ["decrease", "discount", "guarantee", "invoice", "special"];
  },
  computed: {
    seller(){
      return this.$store.state.seller
    }
  },
};
</script>

<style lang="less">
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
      padding: 18px 0;
      .star-warpper{display: inline-block}
      span{
        line-height: 18px;
        font-size: 10px;
        color: rgb(77,85,93);
        &.ratingCount{
          margin: 0 12px 0 8px;
        }
      }
      .collect{
        float: right;
        .iconfont{
          line-height: 24px;
          font-size: 24px;
          color: rgb(240,20,20)
        }
        p{
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
}
</style>
