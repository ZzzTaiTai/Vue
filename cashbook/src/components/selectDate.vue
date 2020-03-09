<template>
  <div class="dateBox">
      <h3 class="title">选择月份</h3>
      <div class="date">
          <div class="yearBox">
            <a href="javascript:;">+</a>
            <p class="yearValue">{{curYear}}</p>
            <a href="javascript:;">-</a>
          </div>
          <div class="dayBox">
            <a href="javascript:;">+</a>
            <p class="monthValue">{{curMonth}}</p>
            <a href="javascript:;">-</a>
          </div>
      </div>
      <el-button-group>
        <el-button type="info" @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button>
      </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'selectDate',
  props: ['showDate','year','month'],
  data() {
    return {
      isShow:this.showDate,
      curYear:this.year,
      curMonth:this.month
    }
  },
  
  methods: {
    confirm() {
      

      this.hideSelect();
    },
    cancel() {
      this.hideSelect();
    },
    hideSelect() {
      this.$emit('dateToggle');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dateBox{
  position: fixed;
  top:50%;
  left:50%;
  width: 250px;
  height: 160px;
  margin-top: -80px;
  margin-left: -125px;
  background: #fff;
  z-index: 9999;
}
</style>
