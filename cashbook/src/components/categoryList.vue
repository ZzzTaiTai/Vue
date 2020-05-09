<template>
  <div class="category-List">
    <div class="pieContainer">
      <chart :options="options" @callBack="changeAngle" :update="update"></chart>
    </div>
    <!-- <dl v-for="items in newList" :key="items.id" >
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
    </dl>-->
  </div>
</template>
<script>
import Highcharts from "highcharts";
import chart from "@/components/chart";
import { mapGetters } from "vuex";
export default {
  name: "categoryList",
  data() {
    return {
      options: null,
      update:{},
      // header:["结余", "相比上月支出"],
      // headerTotal:["收入", "相比上月支出"]
    };
  },
  props: ["list", "lastList"],
  created() {
    let that = this;
    this.options = this.initPie([
      { name: "购物", y: 2 ,color:'#FFC547'},
      { name: "一般", y: 3 ,color:'#FF9B39'},
    ]);
  },
  mounted() {},
  computed: {
    ...mapGetters(["getDateObj"]),
    expenseTotal() {
      let total = 0;
      for (let i = 0; i < this.list.data.length; i++) {
        total += this.list.data.expenseTotal;
      }
      return total;
    },
    icomeTotal() {
      let total = 0;
      for (let i = 0; i < this.list.data.length; i++) {
        total += this.list.data.icomeTotal;
      }
      return total;
    }
  },
  watch: {},
  methods: {
    initAry(data) {
      let ary = [],
        expenseTotal = 0,
        icomeTotal = 0;
      data.forEach(item => {
        item.y > 0 ? (expenseTotal += item.y) : (icomeTotal += icomeTotal);
      });
      ary.push({});
    },
    initPie(objData, text) {
      let that = this,
        newData = JSON.parse(JSON.stringify(objData)),
        angle = 0;
      let obj = {
        chart: {
          type: "pie"
        },
        title: {
          floating: true,
          text: "圆心显示的标题",
          style: {
            color: "#FF00FF",
            fontSize: "18px"
          },
          verticalAlign: "middle"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            point: {
              events: {
                click: function(e) {
                 that.changeAngle(this)
                }
              }
            }
          }
        },
        series: [
          {
            data: objData,
            innerSize: "55%",
            startAngle: 0
          }
        ]
      };
      return obj;
    },
    changeAngle(data){
      let newAngle = this.calculation(data);
      this.update = {
        series: [{
        startAngle: newAngle,
        }]
      }
    },
    calculation(objData){
      console.log(objData)
      const startAngle = 180,
        angle = 360;
      let percentage = objData.percentage,
        newAngle = objData.index === 0 ? 1 : -1;
        // if(percentage) percentage = objData.series[0]. 
        newAngle = newAngle*(startAngle - (angle*percentage*0.01)/2);//得出当前这一项圆饼在图表的占比的一半
      return newAngle
    },

  },
  components: {
    chart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/mixin.scss";

.category-List {
  height: calc(100vh - 185px);
  min-height: 485px;
  overflow-y: auto;
}
</style>
