<template>
  <div class="account-List">
    <div class="itemsBox">
      <div class="items">
        <ul>
          <li v-for="(item,index) in fixedAry.data[curIndex].data" :key="item.id"><i class="num">{{index+1}}</i><span class="itemName">{{item.name}}</span><span class="itemMoney">{{item.money | IntegerFormat}}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Highcharts from "highcharts";
import chart from "@/components/chart";
const dataLabelImg = {
  其他: "icon-qian",
  购物: "icon-gouwu",
  一般: "icon-13",
  qh: "icon-qiehuan"
};
export default {
  name: "categoryList",
  data() {
    return {
    };           
  },
  props: [],
  created() {
  
  },
  computed: {
    
  },
  watch: {
   
  },
  methods: { 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
@import "../common/css/mixin.scss";

.category-List {
  height: calc(100vh - 185px);
  min-height: 485px;
  overflow-y: auto;
  .pieContainer{
    .pieTitle{
      padding:10px 20px;
      border-radius:50%;
      text-align:center;
      cursor: pointer;
      p{color:#000;}
    }
  }
  .itemsBox{
    padding:0 10px;
    .itemTotal{
      display: flex;
      height: 60px;
      padding:0 5px;
      font-size: 18px;
      color: rgba(0,0,0,.8);
      align-items: center;
      justify-content: center;
      @include border-1px(#a0a0a0);
      .iconBox {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #8cc94d;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        .iconfont {
          color: #fff;
          font-size: 24px;
        }
      }
      .tag{
      flex:1;
      padding:0 10px;
      }
      .valTotal{
        color: rgba(0,0,0,.6);
        text-align: right;
      }
  }
  .itemInfo{
      padding:20px 0 10px;
      color:#8a8a8a;
      font-size: 16px;
    }
    .items{
      li{
        display: flex;
        font-size: 18px;
        height: 60px;
        align-items:center;
        @include border-1px(#a0a0a0);
        .itemName{
          flex:1;
          padding:0 50px 0 5px;
          @include oneEllipsis;
        }
        .itemMoney{
          font-size: 12px;
          color:#a0a0a0;
          text-align: right;
        }
        &:nth-child(-n+3){
          .num{
            color:#F4A460;
          }
        }
      }
    }
    
  }
  
      
  
}
</style>
