<template>
  <div class="headers">
    <div class="head">
      <h1>记账本</h1>
    </div>
    <div class="headBox">
      <div class="dateSelect" @click="dateToggle">
        <h2 class="year">{{getDateObj.year}}年</h2>
        <div class="month">
          <em class="num">{{getDateObj.month}}</em>
          <span class="unit">月<i class="tri"></i></span>
        </div>
      </div>
      <selectDate :showDate="showDate" :dateObj="getDateObj" @dateToggle="dateToggle" v-show="showDate"></selectDate>
      <div class="info" >
        <div class="infoL">
          <h2 class="title">{{headTit[0]}}</h2>
          <p v-if="headVal" class="num" :class="{pay: isPay === headTit[0]}">{{ headVal[0] | numFormat }}</p>
        </div>
        <div class="infoR">
          <h2 class="title">{{headTit[1]}}</h2>
          <p  v-if="headVal" class="num">{{headVal[1] | numFormat}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import selectDate from './selectDate'
import { mapGetters } from 'vuex'
export default {
  name: 'headers',
  data() {
    return {
      isPay:'支出(元)',//是否是显示支付
      showDate:false,
    }
  },
  props:['headTit','headVal'],
  created() {
  },
  watch:{
  },
  components:{
    selectDate
  },
  computed: {
    ...mapGetters([
      'getDateObj'
    ]),
    
  },
  watch: {
  },
  methods: {
    dateToggle() {
      this.showDate = !this.showDate
    },
    changeDate() {

    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headers{
    background: rgb(38,44,60);
    font-size: 16px;
    color: #ffffff;
    .head{line-height: 35px;padding:0 15px;}
    .headBox{
    display: flex;
    justify-items: center;
    font-size: 14px;
    padding:5px 0 10px; 
    .dateSelect{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width:95px;
      border-right:1px dashed rgba(255,255,255,.3); 
      padding: 0 15px;
      box-sizing: border-box;
      .year{
        font-size: 12px;
        color: rgb(160, 162, 177);
        margin-bottom:10px;
      }
      .month{
        .unit{
          position: relative;
          i.tri{
          position: absolute;
          top:-2px;
          right: -10px;
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-top-color: #ffffff ;
        }
        }
        em{font-size: 30px;}
        
      }
    }
    .info{
      display: flex;
      flex: 1;
      padding: 0 20px;
      .infoL ,.infoR{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
      }
      .title{
        font-size: 12px;
        color: rgb(160, 162, 177)
      }
      .num{
        &.pay{
          font-size: 16px;
        }
      }
    }
  }
}
  
</style>
