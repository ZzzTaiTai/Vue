<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper" >
      <ul>
        <li v-for="(item,index) in goods" class="menuItem"  :class="{current: currentIndex === index}"  @click="menuSelect(index,$event)">
          <span class="text ">
            <span v-show="item.type > 0 " :class="classMap[item.type]" class="icon" ></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="food-list food-list-hook">
            <h1 class="title">{{ item.name }}</h1>
            <ul>
              <li v-for="(food, index) in item.foods" class="food-item ">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{ food.name }}</h2>
                  <p class="desc" v-show="food.description">{{ food.description }}</p>
                  <div class="extra">
                    <span class="count">月售{{ food.sellCount }}份</span>
                     <span>好评率{{ food.rating }}%</span>
                  </div>
                  <div class="price">
                    <span class="nowPrice"><em>￥</em>{{ food.price }}</span>
                    <span class="oldPrice" v-show="food.oldPrice">￥{{ food.oldPrice }}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
    <shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import shopcart from '../shopcart/shopcart'

export default {
  props: ["seller"],
  components:{
    shopcart:shopcart
  },
  data() {
    return {
      goods: [],
      listHeight:[],
      scrollY:0
    };
  },
  created() {
    this.$axios.get("../../static/data.json").then(response => {
      this.goods = response.data.goods;
      this.$nextTick(() =>{
        this._initScroll();
        this._calculateHeight();

      })
      
    });
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
  },
  computed: {
     currentIndex (){
        for(let i = 0; i<this.listHeight.length;i++){
          let leftHeight = this.listHeight[i];
          let rightHeight = this.listHeight[i+1];
          if(!rightHeight || (this.scrollY >= leftHeight && this.scrollY < rightHeight)){
            return i
          }
        }
        return 0;
      }
  },
  methods: {
    _initScroll(){
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click:true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType:3
      });
      this.foodsScroll.on('scroll',(pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight(){
      let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
      let height = 0;
      this.listHeight.push(height);
      for(let i = 0;i < foodList.length;i++){
        let item = foodList[i];
        height+=item.clientHeight
        this.listHeight.push(height);
      }
    },
    menuSelect(curIndex,event){
     if(!event._constructed){
       return
     }
     let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
     let el = foodList[curIndex];
     this.foodsScroll.scrollToElement(el,300)

    }

  }
};
</script>

<style lang="less">
@import "../../common/css/mixin";
.goods {
  display: flex;
  position: absolute;
  top: 177px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background-color: #f3f5f7;
    .menuItem {
      display: table;
      height: 54px;
      width: 56px;
      padding:0 12px;
      line-height: 14px;
      &.current{
          position: relative;
          z-index: 10;
          background: #ffffff;
          font-weight: 700;
          .text{
            .border-none();
          }
      }
      .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        vertical-align: top;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        &.decrease {
          .bg-image("decrease_3");
        }
        &.discount {
          .bg-image("discount_3");
        }
        &.guarantee {
          .bg-image("guarantee_3");
        }
        &.invoice {
          .bg-image("invoice_3");
        }
        &.special {
          .bg-image("special_3");
        }
      }
      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        font-size: 12px;
      }
    }
  }
  .foods-wrapper {
    flex: 1;

    h1.title{
      padding-left:14px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color:rgb(147, 153, 159);
      height: 26px;
      line-height: 26px;
      background: #f3f5f7;
    }
    .food-item{
     display: flex;
     padding:18px;
     .border-1px(#E1E1E1);
     &:last-child{
       .border-none();
     }
     .icon{
       flex: 0 0 57px;
       margin-right: 10px;
     }
     .content{
       flex: 1;
       .name{
          margin: 2px 0 8px;
          font-size: 14px;
          color: rgb(7, 17, 27);
          line-height: 14px;
       }
       .extra,.desc{
        font-size: 10px;
        color: rgb(143, 157, 159);
        line-height: 10px;
       }
       .extra{
        margin-top: 8px;
        .count{
          margin-right: 12px;
        }
       }
       .price{
         font-weight: 700;
         line-height: 24px;
         .nowPrice{
           margin-right: 8px;
           font-size: 14px;
           color: rgb(240, 20, 20);
         } 
         .old{
           text-decoration: line-through;
           font-size: 10px;
           color:rgb(147, 153, 159)
         }
       }
     }
     
    }
  }
}
</style>