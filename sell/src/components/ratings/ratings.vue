<template>
  <div class="rating">
      <div class="rating-content">
        <div class="multiple">
          <h2 class="mark">{{seller.score}}</h2>
          <p class="multipleMark">综合评分</p>
          <p class="high">高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="starList">
          <div class="item">
            <span>服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="mark">{{seller.serviceScore}}</span>
          </div>
          <div class="item">
            <span>食物评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="mark">{{seller.foodScore}}</span>
          </div>
          <div class="item">
            <span>送达时间</span>
            <span class="arrive">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
  </div>
</template>

<script>
import star from '../star/star'
import split from '../split/split'
export default {
  data() {
    return {
      seller:[]
    }
  },
  components:{
    star,
    split
  },
  created() {
        this.$axios.get('../../static/data.json').then((response) => {
        this.seller = response.data.seller;
      })
  },
  
};
</script>

<style lang="less">
  .rating{
    .rating-content{
      display: flex;
      justify-content: center;
      align-items: center; 
      padding:18px 0;
      .multiple{
        flex: 0 0 137.5px;
        text-align: center;
        .mark{
          margin-bottom: 6px;
          line-height: 28px;
          font-size: 24px;
          color: rgb(255, 153, 0);
        }
        .multipleMark{
          margin-bottom: 8px;
          line-height: 12px;
          font-size: 12px;
          color:rgb(7, 17, 27);
        }
        .high{
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }
      }
      .starList{
        border-left: 1px solid rgba(147, 153, 159,.2);
        padding: 0 24px;
        .item{
          display: flex;
          margin-bottom: 8px;
          line-height: 18px;
          font-size: 12px;
          color: rgb(25, 26, 27);
          &:last-child{
            margin: 0;
          }
          .star{
            margin:0 12px;
          }
          .mark{
            color: rgb(255, 153, 0);
          }
          .arrive{
            margin:0 12px;
            color: rgb(147, 153, 159)
          }
        }
      }
    }
  }
</style>
