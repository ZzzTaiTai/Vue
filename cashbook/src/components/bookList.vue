<template>
  <div class="book-List" v-if="bookList" >
    <Loading v-if="loading"></Loading>
    <dl v-for="items in bookList.data" >
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
        <span class="info">{{list.name}}--{{items.time}}</span>
        <em class="num">{{ list.money | IntegerFormat }}元</em>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loading from './common/loading'
export default {
  name: "bookList",
  data() {
    return {
      bookList: null,
      newList: [],
      loading:false,
      
    };
  },
  props:["list"],
  components:{
    Loading
},
  created() {

    let that = this;
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
    // this.$emit('changeTit',this.headerTit[0],this.headerTit[1]);
    this.loading = true;
    setTimeout(function(){
      that.bookList = that.recombination(that.list);
      that.loading = false;
    },1000)
    // this.$store.commit("headTextChange", this.headerText(this.bookLists.header));
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
    ...mapGetters([
      'getDateObj'
    ])
  },
  watch: {
  },
  methods: {
    recombination(ary) {
      let newAry = {
          data: []
        },
        isExist = false,
        isNum,
        expenseTotal = 0,
        icomeTotal = 0,
        time,
        _self = this;
        ary.forEach(function(item, index) {
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
      return newAry;
    },
    getTimeNum(timeValue,mark) {
      return timeValue.split(mark);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/mixin.scss";

.book-List {
  height: calc(100vh - 185px);
  max-height: 485px;
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
        font-size: 18px;
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
