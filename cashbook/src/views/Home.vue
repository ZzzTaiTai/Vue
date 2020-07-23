<template>
  <div class="home">
    <headers :headTit="changeTitle" :headVal="changeValue"></headers>
    <div id="nav">
      <van-tabs
        v-model="active"
        type="card"
        boder
        color="#ffffff"
        background="#5B5E63"
        title-active-color="#000000"
        title-inactive-color="#ffffff"
      >
        <van-tab title="明细">
          <bookList :list="newList"></bookList>
          <div class="addBtn">
            <a href="javascript:;" class="add-btn"  @click="showCash()">
              <i class="el-icon-plus"></i>
              <h1 class="title">记一笔</h1>
          </a>
          </div>
        </van-tab>
        <van-tab title="类别报表">
          <categoryList
            :list="categoryList"
            :expense="expenseTotal"
            :income="incomeTotal"
            :isChildren="isChildren"
            @children="changeChildren"
            :curActive="active"
          ></categoryList>
        </van-tab>
        <van-tab title="账户">
          <accountList :list="categoryList"></accountList>
        </van-tab>
      </van-tabs>
    </div>
    
    <addCash :isShow="isAdd" @showAdd="showCash()" @addCash="addCash"></addCash>
    
  </div>
</template>

<script>
// @ is an alias to /src

import headers from "@/components/headers";
import addCash from "@/components/addCash";
import bookList from "@/components/bookList";
import categoryList from "@/components/categoryList";
import accountList from "@/components/accountList";
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      active: "0",
      isChildren: false,
      isAdd:false,
      bookList: [],
      newList: [],
      lastList: [],
      headerTit: [],
      categoryList: []
    };
  },
  components: {
    bookList,
    headers,
    addCash,
    categoryList,
    accountList
  },
  created() {
    // let that = this;

    this.list = {
      data: [
        {
          id: 1,
          name: "余额宝",
          time: "2020-01-30 14:21:20",
          money: 8432.64,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 14,
          name: "付款给我的朋友",
          time: "2020-01-31 14:30:20",
          money: -2558.12,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 4,
          name: "一个朋友向你转账",
          time: "2020-01-29 14:24:20",
          money: 222.48,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 15,
          name: "余额宝",
          time: "2020-01-31 13:22:20",
          money: -697.98,
          iconNum: 5,
          typeName: "一般",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 5,
          name: "某人向你转账",
          time: "2020-01-30 10:20:22",
          money: 958.55,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "中国工商银行",
            bankType:"ICBC",
            isBank: true,
            info: "储蓄卡",
            bankNum: "2541"
          }
        },
        {
          id: 18,
          name: "京东购物海尔洗衣机",
          time: "2020-01-29 08:20:21",
          money: -3449.04,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "中国工商银行",
            bankType:"ICBC",
            isBank: true,
            info: "储蓄卡",
            bankNum: "2541"
          }
        },
        {
          id: 7,
          name: "余额宝",
          time: "2020-01-31 09:20:21",
          money: 1166.05,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 19,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 1212.26,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 10,
          name: "余额宝",
          time: "2020-01-29 5:24:20",
          money: 4839.26,
          iconNum: 4,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 22,
          name: "余额宝",
          time: "2020-02-01 13:22:20",
          money: 2723.04,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 11,
          name: "购买了一台电脑",
          time: "2020-01-30 23:24:20",
          money: -3348,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "中国银行",
            bankType:"BOC",
            isBank: true,
            info: "信用卡",
            bankNum: "7222"
          }
        },
        {
          id: 12,
          name: "购买了一台手机",
          time: "2020-01-29 13:22:20",
          money: -6718.55,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "中国银行",
            bankType:"BOC",
            isBank: true,
            info: "信用卡",
            bankNum: "7222"
          }
        },
        {
          id: 23,
          name: "省内旅游",
          time: "2020-01-31 20:24:20",
          money: -1601.18,
          iconNum: 3,
          typeName: "一般",
          account: {
            name: "中国银行",
            bankType:"BOC",
            isBank: true,
            info: "信用卡",
            bankNum: "7222"
          }
        },
        {
          id: 24,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 7546.81,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 30,
          name: "余额宝",
          time: "2020-01-29 15:24:20",
          money: -2552.55,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "花呗",
            bankType:"HB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 21,
          name: "余额宝",
          time: "2020-01-30 13:22:20",
          money: 2958.55,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额宝",
            bankType:"YEB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 9,
          name: "购物了一台电视",
          time: "2020-02-03 16:24:20",
          money: -3449,
          iconNum: 3,
          typeName: "一般",
          account: {
            name: "中国建设银行",
            bankType:"CCB",
            isBank: false,
            info: "信用卡",
            bankNum: "2555"
          }
        },
        {
          id: 20,
          name: "余额",
          time: "2020-02-02 13:22:20",
          money: 8166,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 8,
          name: "余额",
          time: "2020-02-02 14:23:20",
          money: 9212.26,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 17,
          name: "余额",
          time: "2020-02-03 13:24:30",
          money: 4839.26,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 6,
          name: "余额宝",
          time: "2020-02-02 13:25:24",
          money: -2723.04,
          iconNum: 1,
          typeName: "购物",
          account: {
            name: "中国建设银行",
            bankType:"CCB",
            isBank: true,
            info: "信用卡",
            bankNum: "2555"
          }
        },
        {
          id: 16,
          name: "余额",
          time: "2020-02-02 18:24:20",
          money: 8348.58,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 3,
          name: "余额",
          time: "2020-02-03 13:22:27",
          money: 6718.55,
          iconNum: 1,
          typeName: "其他",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 13,
          name: "吃了一顿饭",
          time: "2020-02-02 13:22:21",
          money: -160,
          iconNum: 2,
          typeName: "购物",
          account: {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }
        },
        {
          id: 2,
          name: "淘宝购物",
          time: "2020-02-01 13:22:20",
          money: -546.81,
          iconNum: 3,
          typeName: "购物",
          account: {
            name: "花呗",
            bankType:"HB",
            isBank: false,
            info: "",
            bankNum: ""
          }
        }
      ]
    };
    this.headerTit = [
      {
        data: ["支出(元)", "收入(元)"],
        children: []
      },
      {
        data: ["结余", "相比上月支出"],
        children: ["结余", "相比上月收入"]
      },
      {
        data: ["支出(元)", "收入(元)"],
        children: []
      }
    ];
    this.initData();
    // this.$axios
    //   .get('/data/getData')
    //   .then( res => {
    //     that.bookList = res.data;
    //     that.bookList.data.sort(this.arraySort);
    //     that.$store.commit("newDate", that.dateObj(that.bookList));
    //   })
    // this.bookList = this.list;
    // this.bookList.data.sort(this.arraySort);
    // this.$store.commit("newDate", this.dateObj(this.bookList));
    // this.$axios
    //   .get("https://easy-mock.com/mock/5e33d958efe660215074f675/cash/bookLists")
    //   .then(response => {
    //     // this.bookList = response.data.data.course_list;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

  },
  computed: {
    ...mapGetters(["getDateObj"]),
    //当月支出
    expenseTotal() {
      let expense = 0;
      if (this.newList.data) {
        this.newList.data.forEach(item => {
          expense += item.expenseTotal;
        });
      }
      return expense;
    },

    //当月收入
    incomeTotal() {
      let income = 0;
      if (this.newList.data) {
        this.newList.data.forEach(item => {
          income += item.incomeTotal;
        });
      }
      return income;
    },
    //当月结余
    balance() {
      // console.log(this.incomeTotal,this.expenseTotal)
      return this.incomeTotal - this.expenseTotal;
    },
    //相比上月支出/收入
    last() {
      let lastE = 0, //支出
        lastI = 0, //收入
        newAry = [];
      if (this.lastList.data) {
        this.lastList.data.forEach(item => {
          lastE += item.expenseTotal;
          lastI += item.incomeTotal;
        });
      }
      if (!this.isChildren) {
        newAry = [
          this.balance,
          ((this.expenseTotal - lastE) / this.expenseTotal * 100).toFixed(2) + "%"
        ];
      } else {
        newAry = [
          this.balance,
          ((this.incomeTotal - lastI) / this.incomeTotal * 100).toFixed(2) + "%"
        ];
      }
      return newAry;
    },
    changeTitle() {
      if (this.isChildren && this.headerTit[this.active].children.length > 0) {
        return this.headerTit[this.active].children;
      }
      return this.headerTit[this.active].data;
    },
    changeValue() {
      let ary = [];
      ary = [
        { data: [this.expenseTotal, this.incomeTotal] },
        { data: this.last },
        { data: [this.expenseTotal, this.incomeTotal] }
      ];
      return ary[this.active].data;
    }
  },
  watch: {
    getDateObj(curVal, oldVal) {
      let lastVal = this.getLastMonth(curVal);
      this.newList = this._recombination(this.satisfy(curVal, oldVal));
      this.lastList = this._recombination(this.satisfy(lastVal));
      this.categoryList = this.satisfy(curVal, oldVal);
    },
    //监控数据添加后，重新渲染数据，如重新请求接口可以省略
    bookList:{
      handler() {
        let lastVal = this.getLastMonth(this.$store.getters.getDateObj);
        this.newList = this._recombination(this.satisfy(this.$store.getters.getDateObj));
        this.lastList = this._recombination(this.satisfy(lastVal));
        this.categoryList = this.satisfy(this.$store.getters.getDateObj);
      },
      deep:true
    }
  },
  methods: {
    //请求数据接口
    initData() {
      let that = this;
      // if(localStorage.getItem('data')) {
      //   that.bookList.data = JSON.parse(localStorage.getItem('data'));
      // }
      this.$axios
      .get('/data/getData')
      .then( res => {
        that.bookList = res.data;
        that.bookList.data.sort(this.arraySort);
        that.$store.commit("newDate", that.dateObj(that.bookList));
        localStorage.setItem('data',JSON.stringify(that.bookList))
      });
    },
    //处理请求的数据
    _recombination(ary) {
      let newAry = {
          data: []
        },
        isExist = false,
        isNum,
        time,
        _self = this;
      ary.forEach(function(item, index) {
        time = _self.getTimeNum(item.time, " ")[0];
        isNum = newAry.data.findIndex(newItem => newItem.time == time);
        if (isNum === -1) {
          newAry.data.push({
            time: time,
            expenseTotal: 0,
            incomeTotal: 0,
            data: [item]
          });
          isNum = newAry.data.length - 1;
        } else {
          // delete item.time;
          newAry.data[isNum].data.push(item);
        }
        if (item.money < 0) {
          newAry.data[isNum].expenseTotal += Math.abs(item.money);
        } else {
          newAry.data[isNum].incomeTotal += parseInt(item.money);
        }
      });
      return newAry;
    },
    //过滤符合条件的账单，不满足则返回最新的账单
    satisfy(newObj, oldObj) {
      let year = newObj.year,
        month = newObj.month < 10 ? "0" + newObj.month : newObj.month,
        list = this.bookList.data.filter(list => {
         
          return list.time.indexOf(year + "-" + month) >= 0;
        });
      if (list.length == 0 && oldObj) {
        this.$store.commit("newDate", oldObj);
      }
      return list;
    },
    dateObj(ary) {
      let timeAry = this.getTimeNum(ary.data[0].time, "-"),
        newYear = parseInt(timeAry[0]),
        newMonth = parseInt(timeAry[1]),
        curDateObj = this.$store.getters.getDateObj,
        newDateObj = {};
      return (newDateObj = {
        year: newYear,
        month: newMonth
      });
    },

    getTimeNum(timeValue, mark) {
      return timeValue.split(mark);
    },
    //数据时间排序
    arraySort(a, b) {
      return (
        Date.parse(b.time.replace(/-/g, "/")) -
        Date.parse(a.time.replace(/-/g, "/"))
      );
    },
    //获取上个月日期
    getLastMonth(date) {
      let year = date.year;
      let month = date.month;
      let lastDate = {};
      if (month - 1 == 0) {
        month = 12;
        year = year - 1;
      } else {
        month = month - 1;
      }
      lastDate.year = year;
      lastDate.month = month;
      return lastDate;
    },
    //切换有children的数据
    changeChildren() {
      if (this.headerTit[this.active].children.length === 0) return;
      this.isChildren = !this.isChildren;
    },
    showCash() {
      this.isAdd = !this.isAdd;
    },
    addCash(obj){
      this.$toast.success('添加成功');
      // this.initData();//调用添加接口后重新请求最新的数据，以下两步可以省略
      this.bookList.data.push(obj)
      this.bookList.data.sort(this.arraySort);
    }
  },
};
</script>
<style lang="scss" scope>
.van-tabs__nav--card,
.van-tabs__nav--card .van-tab {
  margin: 0 !important;
  border: 0 !important;
}
.addBtn {
  height: 100%;
  width: 100%;
  text-align: center;
  background: #ffffff;
  .title {
    display: inline-block;
    font-size: 16px;
    color: #409eff;
  }
  i {
    display: inline-block;
    color: #409eff;
  }
}

</style>
  
