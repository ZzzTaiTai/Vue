<template>
  <div class="chart" >
    <div class="curChart" :id=id style="width:100vw;height:44vh"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
  name: "chart",
  data() {
    return {
      chart:null,
      id:'pieChart'
    }
  },
  props:['options','update','titleVal','showList'],
  mounted() {
      this.chart = HighCharts.chart(this.id,this.options);
      this.$emit('callBack', this.chart);
  },
  watch: {
    showList:function(val){
      this.chart.series[0].update(val);
      this.$emit('callBack', this.chart);
      this.updateTitle();
    },
    update:function(val){
      if(val instanceof Object){
        this.chart.update(val)
      }
      return false
    }
  },
  methods: {
    updateTitle(){
      this.chart.title.update({text:`<div class="pieTitle">${this.showList.name}</br><p>${this.titleVal}</p><i style="font-size:30px;font-weight:700" class="iconfont icon-qiehuan"></i></div>`})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../common/css/mixin.scss";
.chart {
  height: 45vh;
  overflow-y: auto;
  .pieChart{
    
  }
  .iconfont{
    font-size: 20px;
  }
}
</style>
