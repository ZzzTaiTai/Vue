<template>
  <div class="category-List">
    <div class="pieContainer">
      <chart :options="options" @callBack="changeAngle" :update="update"></chart>
    </div>
    <dl v-for="items in list" :key="items.id" >
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
import Highcharts from "highcharts";
import chart from "@/components/chart";

const dataLabelImg = {
      yb:'qian',
      '购物':'gouwu',
      '一般':'13',
      qh:'qiehuan'
    }

export default {
  name: "categoryList",
  data() {
    return {
      options: null,
      update:{},
      curIndex : 0,//圆饼当前选中的序号
      initArt:[
        { 
          name:'总支出',
          data:[

          ],
          innerSize:'60%'
        },
        { 
          name:'总收入',
          data:[

          ],
        }
      ]
    };
  },
  props: ["list",'expense','income'],
  created() {
    let that = this;
    this.initData(this.list.data)
   this.options = this.initPie([
          {
            name:'总支出',
            data:[
              { name: "购物", y: 5,color:'#FFC547',img:dataLabelImg.gw},
              { name: "一般", y: 3,color:'#FF9B39',img:dataLabelImg.yb}
            ],
            innerSize: "60%"
          }
    ])
  },
  mounted() {},
  computed: {
    // expenseTotal() {
    //   let total = 0;
    //   }
    //   return total;
    // },
    // icomeTotal() {
    //   let total = 0;
    //   for (let i = 0; i < this.list.data.length; i++) {
    //     total += this.list.data.icomeTotal;
    //   }
    //   return total;
    // }//   for (let i = 0; i < this.list.data.length; i++) {
    //     total += this.list.data.expenseTotal;
    
  },
  watch: {
    
  },
  methods: {
    initData(data){
      let ary = [],
        isExist = false,
        isNum = 0;
      data.forEach((item,index)=>{
        isExist = ary.find(newItem => newItem.typeName === item.typeName);
        if(!isExist){
          ary.push({
            typeName:item.typeName,
            data:[]
            })
        }
        isNum = ary.findIndex(newItem => newItem.typeName === item.typeName);
        ary[isNum].data.push(item)
      })
      console.log(ary)
    },

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
          type: "pie",
          events: {
            //点击圆饼中心空白处切换数据
            click: function (event) {
              if(event.target.nodeName !== 'rect'){
                that.$emit('children')
              }
            }
          }
        },
        title: {
          floating: true,
          text: `<div style="padding:10px 20px;border-radius:50%;text-align:center">${objData[0].name}</br>${objData[0].data[this.curIndex].y}</br><i style="font-size:30px;font-weight:700" class='icon iconfont icon-${dataLabelImg.qh}'></i></div>`,
          style: {
            color: '#FF00FF',
            fontSize: '22px'
          },
          verticalAlign: 'middle',
          useHTML:true
        },
        tooltip: {
          show:false
        },
        plotOptions: {
          pie: {
            point: {
              events: {
                click: function(e) {
                  this.curIndex = this.index;
                  that.changeAngle(this)
                }
              }
            },
            dataLabels: {
              distance: '-19%',
              useHTML:true,
              style: {
                color:"#ffffff"
              },
              formatter:function(){
                return "<i class='iconfont icon-"+this.point.img+"'></i>"
              }
            }
          }
        },
        series: objData,
        visible:false,  
        credits:{
            enabled:false // 禁用版权信息
        }
      };
      return obj;
    },
    changeAngle(data){
      //update传递startAngle新的开始角度给图表
      let newAngle = this.calculation(data);
      this.update = {
        series: [{
        startAngle: newAngle,
        }]
      }
    },
    calculation(objData){
      const startAngle = 180,
        angle = 360;
      let percentage = objData.percentage,
        newAngle = objData.index === 0 ? 1 : -1;
        //图表初始化回调传入的是charts
      
      if(!percentage){
        percentage = objData.series[0].data[0].percentage
        newAngle = 1;
      }
        //得出当前这一项圆饼在图表的占比的一半,目前是支持两项
        newAngle = newAngle*(startAngle - (angle*percentage*0.01)/2);
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
