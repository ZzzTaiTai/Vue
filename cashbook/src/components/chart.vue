<template>
  <div class="chart" >
    <div class="curChart" :id=id></div>
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
  props:['options','update'],
  mounted() {
      this.chart = HighCharts.chart(this.id,this.options);
      this.$emit('callBack', this.chart);
      console.log(this.chart)
  },
  watch: {
    options:function(val){
      this.chart.series[0].update(val.series[0])
    },
    update:function(val){
      if(val instanceof Object){
        this.chart.update(val)
      }
      return false
    }
  },
  methods: {
    changeAngle(data){
      const startAngle = 180;
      const angle = 360;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../common/css/mixin.scss";

.chart {
  height: calc(100vh - 185px);
  min-height: 485px;
  overflow-y: auto;
  .pieChart{
    width: 100vw;
    height: 40vh;
  }
}
</style>
