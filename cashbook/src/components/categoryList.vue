<template>
  <div class="category-List">
    <div class="pieContainer">
      <chart :options="options" @callBack="changeAngle" :update="update" :titleVal="pieTitleVal" :fixedAry='fixedAry'></chart>
    </div>
    <div class="itemsBox">
      <h2 class="itemTotal">
        <span class="iconBox">
          <i class="iconfont"  :class="fixedAry.data[curIndex].img"></i>
        </span>
        <span class="tag">
          {{ fixedAry.data[curIndex].name }}
          {{ curScale }}
        </span>
        <span class="valTotal" v-if="isChildren">{{fixedAry.data[curIndex].y | numTo2 | IntegerFormat}}</span>
        <span class="valTotal" v-else>-{{fixedAry.data[curIndex].y | numTo2 }}</span>
      </h2>
      <h3 class="itemInfo"  v-if="isChildren">{{fixedAry.data[curIndex].name}}收入排行榜</h3>
      <h3 class="itemInfo" v-else>{{fixedAry.data[curIndex].name}}消费排行榜</h3>
      <div class="items">
        <ul>
          <li v-for="(item,index) in fixedAry.data[curIndex].data" :key="item.id"><i class="num">{{index+1}}</i><span class="itemName">{{item.name}}</span><span class="itemMoney">{{item.money | IntegerFormat}}</span></li>
        </ul>
      </div>
    </div>
    <!-- <dl v-for="items in fixedAry.data[curIndex].data" :key="items.id">
      <dt>
        <span class="time">{{ items.time | dateFormat }}</span>
        <span>
          支出:{{ items.money }}元
      
        </span>
      </dt> -->
      <!-- <dd v-for="list in items.data" :key="list.id">
        <span class="iconBox">
          <i class="iconfont" :class="'icon-' + classMap[list.iconNum]"></i>
        </span>
        <span class="info">{{list.name}}--{{items.time}}</span>
        <em class="num">{{ list.money | IntegerFormat }}元</em>
      </dd> -->
    </dl>
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
const colorMap = ['#F4A460','#FFEC8B','#66CD00']
export default {
  name: "categoryList",
  data() {
    return {
      options: null,
      update: {},
      curIndex: 0, //圆饼当前选中的序号
      fixedAry: [],
    };           
  },
  props: ["list", "expense", "income","isChildren"],
  created() {
    this.fixedAry = this.addData(this.initData(this.list));
    this.options = this.initPie(this.fixedAry);
  },
  computed: {
    pieTitleVal(){
      return this.isChildren ? this.$filters.numFormat(this.income) : this.$filters.numFormat(this.expense)
    },
    curScale(){
      let total = 0;
      this.fixedAry.data.forEach((item)=>{total += item.y})
      return (this.fixedAry.data[this.curIndex].y / total).toFixed(1)+"%"
    }
  },
  watch: {
    list:{         
      handler(){
        this.fixedAry = this.addData(this.initData(this.list));
      },
      deep:true
    },
    isChildren(){
      this.curIndex = 0;
      this.fixedAry = this.addData(this.initData(this.list));
    },
  },
  methods: { 
    initData(data) {
      let ary = [],
        isExist = false,
        isNum = 0;
      data.forEach((item, index) => {
        isExist = ary.find(newItem => newItem.name === item.typeName);
        if (!isExist) {
          ary.push({
            name: item.typeName,
            y: 0,
            img: dataLabelImg[item.typeName],
            data:[],
            sliced:true,
          });
        }
        isNum = ary.findIndex(newItem => newItem.name === item.typeName);
        ary[isNum].y += item.money;
        ary[isNum].data.push(item);
      });
      return ary
    },
    addData(data) {
      let num =  !this.isChildren ?  1 : 0, //0是支出,1是收入
        ary = [
          {
            name: "总收入",
            data: [],
            innerSize: "60%"
          },
          {
            name: "总支出",
            data: [],
            innerSize: "60%"
          }]
      data.forEach(item => {
        if (item.y > 0) {
          ary[0].data.push(item);
        } else {
          item.y = Math.abs(item.y);
          ary[1].data.push(item);
        }
      });
      return ary[num];
    },
    initPie(objData) {
      let that = this,
        angle = 0;
      
      let obj = {
        chart: {
          type: "pie",
          events: {
            click: function(event) {
              if (event.target.nodeName !== "rect") {
                that.$emit("children");  
              }
            }
          }
        },
        title: {
          floating: true,
          text: `<div class="pieTitle">${objData.name}</br><p>${that.pieTitleVal}</p><i style="font-size:30px;font-weight:700" class='icon iconfont ${dataLabelImg.qh}'></i></div>`,
          style: {
            color: "#666",
            fontSize: "22px"
          },
          verticalAlign: "middle",
          useHTML: true
        },
        tooltip: {
          enabled: false
        },
        colors:colorMap,
        plotOptions: {
          pie: {
            point: {
              events: {
                click: function(e) {
                  that.curIndex = this.index;
                  that.changeAngle(this);
                }
              }
            },
            slicedOffset: 2,
            dataLabels: {
              distance: "-19%",
              useHTML: true,
              style: {
                color: "#ffffff"
              },
              formatter: function() {
                return "<i class='iconfont " + this.point.img + "'></i>";
              }
            }
          }
        },
        series:[objData],
        visible: false,
        credits: {
          enabled: false // 禁用版权信息
        }
      }
      return obj;
    },
    changeAngle(data) {
      //update传递startAngle新的开始角度给图表
      let newAngle = this.calculation(data);
      this.update = {
        series: [
          {
            startAngle: newAngle
          }
        ]
      };
    },
    calculation(objData) {
      const startAngle = 180,
        angle = 360;
      let percentage = objData.percentage,
        newAngle = objData.index === 0 ? 1 : -1;
      //图表初始化回调传入的是charts
      if (!percentage) {
        percentage = objData.series[0].data[0].percentage;
        newAngle = 1;
      }
      //得出当前这一项圆饼在图表的占比的一半,目前是支持两项
      newAngle = newAngle * (startAngle - (angle * percentage * 0.01) / 2);
      return newAngle;
    }
  },
  components: {
    chart
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
