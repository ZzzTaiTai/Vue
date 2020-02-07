<template>
  <div class="rating">
    <div class="rating-content">
      <div class="multiple">
        <h2 class="mark">{{ seller.score }}</h2>
        <p class="multipleMark">综合评分</p>
        <p class="high">高于周边商家{{ seller.rankRate }}%</p>
      </div>
      <div class="starList">
        <div class="item">
          <span>服务态度</span>
          <star :size="36" :score="seller.serviceScore"></star>
          <span class="mark">{{ seller.serviceScore }}</span>
        </div>
        <div class="item">
          <span>食物评分</span>
          <star :size="36" :score="seller.foodScore"></star>
          <span class="mark">{{ seller.foodScore }}</span>
        </div>
        <div class="item">
          <span>送达时间</span>
          <span class="arrive">{{ seller.deliveryTime }}分钟</span>
        </div>
      </div>
    </div>
    <split></split>
    <ratingselect
      :select-type="selectType"
      :only-content="onlyContent"
      :desc="desc"
      :ratings="ratings"
      @changes-type="changesType"
      @changes-only="changesOnly"
    ></ratingselect>
    <div class="ratings">
      <div class="rating-warpper">
        <ul v-show="ratings && ratings.length">
          <li
            class="item"
            v-for="(item, index) in ratings"
            :key="index"
            v-show="needShow(item.rateType, item.text)"
          >
            <div class="avatar">
              <img :src="item.avatar" alt="" width="28" height="28" />
            </div>
            <div class="user">
              <h1 class="userName">{{ item.username }}</h1>
              <star :size="24" :score="item.score"></star>
              <span class="deliveryTime" v-show="item.deliveryTime">{{ item.deliveryTime }}分钟送达</span>
                          <div class="text">
              <p v-show="item.text">{{ item.text }}</p>
              <p v-show="!item.text">无评价内容</p>
              <div class="foodList">
              <ul class="foods"  v-show="item.recommend">
                <i
                class="iconfont"
                :class="{
                  'icon-haoping': item.rateType === 0,
                  'icon-chaping': item.rateType === 1
                }"
              ></i>
                <li
                  class="food"
                  v-for="(recommend, index) in item.recommend"
                  :key="index"
                >
                  {{ recommend }}
                </li>
              </ul>
              </div>
              
            </div>
            </div>

            <!-- <div class="time">{{ item.rateTime | dateFormat }}</div> -->
          </li>
        </ul>
        <div class="no-rating" v-show="!ratings || !ratings.length">
          <span>暂无评价</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "../star/star";
import split from "../split/split";
import ratingselect from "../ratingselect/ratingselect";

const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;

export default {
  data() {
    return {
      ratings: [],
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: "全部",
        positive: "满意",
        negative: "不满意"
      }
    };
  },
  components: {
    star,
    split,
    ratingselect
  },
  created() {
    this.$axios.get("../../static/data.json").then(response => {
      this.ratings = response.data.ratings;
      console.log(this.ratings);
    });
  },
  computed: {
    seller() {
      return this.$store.state.seller;
    }
  },
  methods: {
    sellers() {
      this.sellers();
    },
    changesType(type) {
      this.selectType = type;
    },
    changesOnly() {
      this.onlyContent = !this.onlyContent;
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false;
      } else if (this.selectType === ALL) {
        return true;
      } else {
        return type === this.selectType;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.rating {
  .rating-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px 0;
    .multiple {
      flex: 1 0 137.5px;
      text-align: center;
      .mark {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: rgb(255, 153, 0);
      }
      .multipleMark {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: rgb(7, 17, 27);
      }
      .high {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147, 153, 159);
      }
    }
    .starList {
      border-left: 1px solid rgba(147, 153, 159, 0.2);
      padding: 0 24px;
      flex: auto;
      .item {
        display: flex;
        margin-bottom: 8px;
        line-height: 18px;
        font-size: 12px;
        color: rgb(25, 26, 27);
        &:last-child {
          margin: 0;
        }
        .star {
          margin: 0 12px;
        }
        .mark {
          color: rgb(255, 153, 0);
        }
        .arrive {
          margin: 0 12px;
          color: rgb(147, 153, 159);
        }
      }
    }
  }
  .rating-warpper {
    padding: 0 18px;
    .item {
      position: relative;
      display: flex;
      padding: 18px 0;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .avatar {
        flex: 0;
        margin-right: 12px;
        img {
           border-radius: 50%;
          }
      }
      .user{
        font-size: 0;
        vertical-align: top;
        .userName{
          display: block;
          margin-bottom: 4px;
          font-size: 10px;
          color: rgb(7, 17, 27);
          line-height: 12px;
        }
        .star{
          display: inline-block;
        }
        .deliveryTime{
          display: inline-block;
          margin-left: 6px;
          font-size: 10px;
          font-weight: 200;
          color: rgb(147, 153, 159);
          line-height: 12px;
        }
        .text{

          margin: 6px 0 8px;
          font-size: 12px;
          line-height: 18px;
          color: rgb(7, 17, 27);
          .foodList{
             display: flex;
            i{
              position: absolute;
              left: 0;
              top: 8px;
              }
            .foods{
              position: relative;
              font-size: 0;
              padding-left: 15px;
              .food{
                display: inline-block;
                width: 70px;
                margin: 4px 0 0 8px;
                line-height: 16px;
                padding: 6px;
                font-size: 9px;
                border-radius: 2px;
                border: 1px solid rgba(7, 17, 27, 0.1);
                white-space: nowrap;
                text-overflow: ellipsis;
                // overflow: hidden;
                text-align: center;
              }
            }
          }
          
        }
      }
      .time{
          position: absolute;
          right: 0;
          top: 0; 
        }
    }
  }
}
</style>
