<template>
  <div class="book-List">
    <dl v-for="items in bookList.data" :key="items.id">
      <dt>
        <span class="time">{{ items.time | dateFormat }}</span>
        <span>
          支出:{{ items.expenseTotal }}元
          <span class>收入:{{ items.icomeTotal }}元</span>
        </span>
      </dt>
      <dd v-for="list in items.data" :key="list.id">
        <span class="iconBox">
          <i class="iconfont" :class="'icon-' + classMap[list.iconNum]"></i>
        </span>
        <span class="info">余额宝-2020.1.2-收益</span>
        <em class="num">{{ list.money | IntegerFormat }}元</em>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "bookList",
  data() {
    return {
      bookList: [],
      list: []
    };
  },
  created() {
    this.list = {
      header: ["支出(元)", "收入(元)"],
      data: [
        {
          id: 1,
          name: "余额宝",
          time: "2020-1-30 14:21:20",
          money: 8432.64,
          iconNum: 6
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-1-31 14:30:20",
          money: -2558.12,
          iconNum: 8
        },
        {
          id: 4,
          name: "余额宝",
          time: "2020-1-29 14:24:20",
          money: 1222.48,
          iconNum: 7
        },
        {
          id: 15,
          name: "余额宝",
          time: "2020-1-31 13:22:20",
          money: -697.98,
          iconNum: 5
        },
        {
          id: 5,
          name: "余额宝",
          time: "2020-1-30 10:20:22",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 18,
          name: "余额宝",
          time: "2020-1-29 08:20:21",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 7,
          name: "余额宝",
          time: "2020-1-31 09:20:21",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 19,
          name: "余额宝",
          time: "2020-1-30 13:22:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 10,
          name: "余额宝",
          time: "2020-1-29 5:24:20",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 22,
          name: "余额宝",
          time: "2020-1-31 13:22:20",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 11,
          name: "余额宝",
          time: "2020-1-30 23:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 12,
          name: "余额宝",
          time: "2020-1-29 13:22:20",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 23,
          name: "余额宝",
          time: "2020-1-31 20:24:20",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 24,
          name: "余额宝",
          time: "2020-1-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        },
        {
          id: 14,
          name: "余额宝",
          time: "2020-1-29 15:24:20",
          money: -2552.55,
          iconNum: 5
        },
        {
          id: 21,
          name: "余额宝",
          time: "2020-1-30 13:22:20",
          money: 2958.55,
          iconNum: 1
        },
        {
          id: 9,
          name: "余额宝",
          time: "2020-2-29 16:24:20",
          money: -3449.04,
          iconNum: 5
        },
        {
          id: 20,
          name: "余额宝",
          time: "2020-2-31 13:22:20",
          money: 8166.05,
          iconNum: 2
        },
        {
          id: 8,
          name: "余额宝",
          time: "2020-2-30 14:23:20",
          money: 9212.26,
          iconNum: 5
        },
        {
          id: 17,
          name: "余额宝",
          time: "2020-2-29 13:24:30",
          money: 4839.26,
          iconNum: 4
        },
        {
          id: 6,
          name: "余额宝",
          time: "2020-2-31 13:25:24",
          money: 2723.04,
          iconNum: 3
        },
        {
          id: 16,
          name: "余额宝",
          time: "2020-2-30 18:24:20",
          money: 8348.58,
          iconNum: 4
        },
        {
          id: 3,
          name: "余额宝",
          time: "2020-2-29 13:22:27",
          money: 6718.55,
          iconNum: 1
        },
        {
          id: 13,
          name: "余额宝",
          time: "2020-2-31 13:22:21",
          money: -1601.18,
          iconNum: 3
        },
        {
          id: 2,
          name: "余额宝",
          time: "2020-2-30 13:22:20",
          money: 7546.81,
          iconNum: 2
        }
      ]
    };
    this.bookList = this.recombination(this.list);
    this.classMap = [
      "fushi",
      "yundong",
      "13",
      "gouwu",
      "chifancopy-",
      "meirong",
      "yiliao",
      "xuexi",
      "qian"
    ];
    // this.$axios
    //   .get("https://easy-mock.com/mock/5e33d958efe660215074f675/cash/bookLists")
    //   .then(response => {
    //     // this.bookList = response.data.data.course_list;
    //     // console.log(this.bookList);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  },
  computed: {
    // dateFiltersList() {
    //   // this.
    // }
  },
  methods: {
    recombination(ary) {
      let newAry = {
          header: [],
          data: []
        },
        isExist = false,
        isNum,
        expenseTotal = 0,
        icomeTotal = 0,
        time,
        _self = this;
      ary.data.forEach(function(item, index) {
        time = _self.getTimeNum(item.time,' ')[0];
        isExist = newAry.data.find(newItem => newItem.time == time);
        if (!isExist) {
          newAry.data.push({
            time: time,
            expenseTotal: expenseTotal,
            icomeTotal: icomeTotal,
            data: []
          });
        } else {
          isNum = newAry.data.findIndex(newItem => newItem.time == time);
          if (item.money < 0) {
            newAry.data[isNum].expenseTotal += Math.abs(item.money);
          } else {
            newAry.data[isNum].icomeTotal += parseInt(item.money);
          }
          delete item.time;
          newAry.data[isNum].data.push(item);
        }
      });
      this.$store.commit("headChange", this.headerObj(newAry, ary.header));
      newAry.header = ary.header;
      newAry.data.sort(this.arraySort);
      this.$store.commit("newDate",this.dateObj(newAry))
      return newAry;
    },
    headerObj(ary, title) {
      let headObj = {},
        expenseTotal = 0,
        icomeTotal = 0,
        i = 0;
      for (; i < ary.data.length - 1; i++) {
        expenseTotal += ary.data[i].expenseTotal;
        icomeTotal += ary.data[i].icomeTotal;
      }
      headObj = {
        headLeftTitle: title[0],
        headLeftValue: expenseTotal,
        headRightTitle: title[1],
        headRightValue: icomeTotal
      };
      return headObj;
    },
    dateObj(ary) {
      let timeAry = this.getTimeNum(ary.data[0].time,'-'),
          newYear = parseInt(timeAry[0]),
          newMonth = parseInt(timeAry[1]),
          curDateObj = this.$store.getters.getDateObj,
          newDateObj = {}
      // if(newYear == curDateObj.year && newMonth == curDateObj.month ) return false
      return newDateObj = {
        "year":newYear,
        "month":newMonth
      }
    },
    getTimeNum(timeValue,mark) {
      return timeValue.split(mark);
    },
    arraySort(a, b) {
      return (
        Date.parse(b.time.replace(/-/g, "/")) - Date.parse(a.time.replace(/-/g, "/"))
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/mixin.scss";

.book-List {
  height: calc(100vh - 185px);
  min-height: 485px;

  overflow-y: auto;
  dl {
    margin: 0;
    line-height: 18px;
    &:first-child {
      padding: 0;
    }
    dt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #989ea4;
      margin: 0;
      padding: 5px 12px;
      position: -webkit-sticky;
      position: sticky;
      top: -1px;
      font-size: 14px;
      background: #fff;
      transition: all 0.5s;
      z-index: 2;
    }
    dd {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      white-space: nowrap;
      height: 60px;
      @include border-1px(#8a8a8a);
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
      &:nth-child(even) {
        .iconBox {
          background: #ff650d;
        }
      }
      &:last-child {
        border: 0;
      }
      .info {
        flex: 2;
        padding: 0 50px 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .num {
        font-size: 12px;
        color: #989ea4;
      }
    }
  }
}
</style>
