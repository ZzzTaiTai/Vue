<template>
  <div class="home">
    <headers :headTit="changeTitle" :headVal="headerVal" ></headers>
    <div id="nav">
      <van-tabs v-model="active" type="card" boder  color='#ffffff' background='#5B5E63' title-active-color='#000000' title-inactive-color="#ffffff">
        <van-tab title="明细" ><bookList :list="newList" @changeVal="changeValue"></bookList></van-tab>
        <van-tab title="类别报表" ><categoryList :list="newList" :lastList="lastList" ></categoryList></van-tab>
        <van-tab title=""></van-tab>
      </van-tabs>
    </div>
    <addCash></addCash> 
  </div>
</template>

<script>
// @ is an alias to /src

import headers from "@/components/headers";
import addCash from "@/components/addCash";
import bookList from "@/components/bookList";
import categoryList from "@/components/categoryList";
import { mapGetters } from 'vuex';
export default {
  name: 'home',
  data() {
    return {
      active: '0',
      isChildren:false,
      bookList:[],
      newList:[],
      lastList:[],
      headerTit:[],
      headerVal:[]
    };
  },
  components:{
    bookList,
    headers,
    addCash,
    categoryList
  },
  created() {
    this.list = {
      data: [
        {
          id: 1,
          name: "余额宝",
          time: "2020-01-30 14:21:20",
          money: 8432.64,
          iconNum: 6,
          typeName:'其他'
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-31 14:30:20",
          money: -2558.12,
          iconNum: 8,
          typeName:'购物'
        },
        {
          id: 4,
          name: "余额宝",
          time: "2020-01-29 14:24:20",
          money: 1222.48,
          iconNum: 7,
          typeName:'其他'
        },
        {
          id: 15,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: -697.98,
          iconNum: 5,
          typeName:'一般'
        },
        {
          id: 5,
          name: "余额宝",
          time: "2020-01-30 10:20:22",
          money: 2958.55,
          iconNum: 1,
          typeName:'其他'
        },
        {
          id: 18,
          name: "余额宝",
          time: "2020-01-29 08:20:21",
          money: -3449.04,
          iconNum: 5,
          typeName:'购物'
        },
        {
          id: 7,
          name: "余额宝",
          time: "2020-01-31 09:20:21",
          money: 8166.05,
          iconNum: 2,
          typeName:'其他'
        },
        {
          id: 19,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 9212.26,
          iconNum: 5,
          typeName:'其他'
          
        },
        {
          id: 10,
          name: "余额宝",
          time: "2020-01-29 5:24:20",
          money: 4839.26,
          iconNum: 4,
          typeName:'其他'
        },
        {
          id: 22,
          name: "余额宝",
          time: "2020-02-01 13:22:20",
          money: 2723.04,
          iconNum: 3,
          typeName:'其他'
        },
        {
          id: 11,
          name: "余额宝",
          time: "2020-01-30 23:24:20",
          money: 8348.58,
          iconNum: 4,
          typeName:'其他'
        },
        {
          id: 12,
          name: "余额宝",
          time: "2020-01-29 13:22:20",
          money: -6718.55,
          iconNum: 1,
          typeName:'购物'
        },
        {
          id: 23,
          name: "余额宝",
          time: "2020-01-31 20:24:20",
          money: -1601.18,
          iconNum: 3,
          typeName:'一般'
        },
        {
          id: 24,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 7546.81,
          iconNum: 2,
          typeName:'其他'
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-01-29 15:24:20",
          money: -2552.55,
          iconNum: 5,
          typeName:'购物'
        },
        {
          id: 21,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 2958.55,
          iconNum: 1,
          typeName:'其他'
        },
        {
          id: 9,
          name: "余额宝",
          time: "2020-02-03 16:24:20",
          money: -3449.04,
          iconNum: 5,
          typeName:'一般'
        },
        {
          id: 20,
          name: "余额宝",
          time: "2020-02-02 13:22:20",
          money: 8166.05,
          iconNum: 2,
          typeName:'其他'
        },
        {
          id: 8,
          name: "余额宝",
          time: "2020-02-02 14:23:20",
          money: 9212.26,
          iconNum: 5,
          typeName:'其他'
        },
        {
          id: 17,
          name: "余额宝",
          time: "2020-02-03 13:24:30",
          money: 4839.26,
          iconNum: 4,
          typeName:'其他'
        },
        {
          id: 6,
          name: "余额宝",
          time: "2020-02-02 13:25:24",
          money: 2723.04,
          iconNum: 3,
          typeName:'其他'
        },
        {
          id: 16,
          name: "余额宝",
          time: "2020-02-02 18:24:20",
          money: 8348.58,
          iconNum: 4,
          typeName:'其他'
        },
        {
          id: 3,
          name: "余额宝",
          time: "2020-02-03 13:22:27",
          money: 6718.55,
          iconNum: 1,
          typeName:'其他'
        },
        {
          id: 13,
          name: "余额宝",
          time: "2020-02-02 13:22:21",
          money: -1601.18,
          iconNum: 3,
          typeName:'购物'
        },
        {
          id: 2,
          name: "余额宝",
          time: "2020-02-01 13:22:20",
          money: 7546.81,
          iconNum: 2,
          typeName:'其他'
        }
      ]
    };
    this.headerTit=[
      {
        data:["支出(元)", "收入(元)"],
        children:[]
        },
      {
        data:["结余", "相比上月支出"],
        children:["收入", "相比上月支出"]
      }
    ]
    this.bookList = this.list;
    this.bookList.data.sort(this.arraySort); 
    this.$store.commit("newDate",this.dateObj(this.bookList))
    // this.$axios
    //   .get("https://easy-mock.com/mock/5e33d958efe660215074f675/cash/bookLists")
    //   .then(response => {
    //     // this.bookList = response.data.data.course_list;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  computed:{
    ...mapGetters([
      'getDateObj'
    ]),
    changeTitle(){
      if(this.isChildren){
        return this.headerTit[this.active].children;
      }
      return this.headerTit[this.active].data;
    }
  },
  watch: {
     getDateObj(curVal,oldVal){
      let lastVal = this.getLastMonth(curVal);
      this.newList = this.satisfy(curVal,oldVal);
      this.lastList = this.satisfy(lastVal);
    },
  },
  methods: {
    //过滤符合条件的账单，不满足则返回最新的账单
    satisfy(newObj,oldObj) {

      let year = newObj.year,
        month = newObj.month < 10 ? "0" + newObj.month : newObj.month,
        
        list = this.bookList.data.filter(list => {
          return list.time.indexOf(year + "-" + month) >= 0;
        });
      if (list.length == 0 && oldObj) {
        // this.openMessage();
        this.$store.commit("newDate", oldObj);
      }
      return list;
    },
    dateObj(ary) {
      let timeAry = this.getTimeNum(ary.data[0].time,'-'),
          newYear = parseInt(timeAry[0]),
          newMonth = parseInt(timeAry[1]),
          curDateObj = this.$store.getters.getDateObj,
          newDateObj = {}
      return newDateObj = {
        "year":newYear,
        "month":newMonth
      }
    },
    getTimeNum(timeValue,mark) {
      return timeValue.split(mark);
    },
    arraySort(a, b) {
      return Date.parse(b.time.replace(/-/g, "/")) - Date.parse(a.time.replace(/-/g, "/"))
    },
    //获取上个月日期
    getLastMonth(date){
      let year = date.year;
      let month = date.month;
      let lastDate = {};
      if(month - 1 == 0){
        month = 12;
        year = year - 1;
      }else{
        month = month -1;
      }
      lastDate.year = year;
      lastDate.month = month;
      return lastDate;
    },
    changeValue(leftVal = 0,rightVal = 0){
        this.headerVal = [...arguments]
    }
  },
}
</script>
<style lang="scss" scope>
  .van-tabs__nav--card,.van-tabs__nav--card .van-tab{
    margin:0!important;
    border:0!important;
    
  }

</style>
  
