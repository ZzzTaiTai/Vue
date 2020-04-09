<template>
  <div class="dateBox">
    <h3 class="title">选择月份</h3>
    <div class="date">
      <div class="yearBox box">
        <a href="javascript:;" @click="add(curDateObj,'year')">+</a>
        <p class="yearValue">{{curDateObj.year}}</p>
        <a href="javascript:;" @click="reduce(curDateObj,'year')">-</a>
      </div>
      <div class="dayBox box">
        <a href="javascript:;" @click="add(curDateObj,'month')">+</a>
        <p class="monthValue">{{curDateObj.month}}</p>
        <a href="javascript:;" @click="reduce(curDateObj,'month')">-</a>
      </div>
    </div>
    <el-button-group>
      <el-button type="info" @click="cancel">取消</el-button>
      <el-button type="primary" @click="confirm">确认</el-button>
    </el-button-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "selectDate",
  props: ["showDate", "dateObj"],
  data() {
    return {
      isShow: this.showDate,
      curDateObj: {},
      year: "year",
      month: "month"
    };
  },
  created() {},
  watch: {
    dateObj: {
      deep: true,
      handler(val) {
        this.curDateObj = JSON.parse(JSON.stringify(val));
      },
      immediate: true
    }
  },

  methods: {
    confirm() {
      this.hideSelect();
      this.$store.commit("newDate", this.curDateObj);
    },
    cancel() {
      this.hideSelect();
      this.curDateObj = JSON.parse(JSON.stringify(this.dateObj));
    },
    hideSelect() {
      this.$emit("dateToggle");
    },
    add(obj, key) {
      let maxNum = new Date().getFullYear() + 5;
      if (key === this.month) {
        maxNum = 12;
        if (obj[key] === maxNum) {
          obj[key] = 1;
          return;
        }
      }
      if (obj[key] === maxNum) return;
      obj[key]++;
    },
    reduce(obj, key) {
      let minNum = new Date().getFullYear() - 5;
      if (key === this.month) {
        minNum = 1;
        if (obj[key] === minNum) {
          obj[key] = 12;
          return;
        }
      }
      if (obj[key] === minNum) return;
      obj[key]--;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dateBox {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 250px;
  height: auto;
  margin-top: -80px;
  margin-left: -125px;
  background: #f0f0f0;
  z-index: 9999;
  border-radius: 10px;
  .title {
    padding: 15px 5px;
    font-size: 16px;
    color: rgb(80, 124, 245);
    border-bottom: 2px solid rgb(80, 124, 245);
  }
  .date {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    text-align: center;
    color: #333;
    font-size: 16px;
    .box {
      a {
        display: inline-block;
        width: 45px;
        margin: 5px;
        height: 35px;
        line-height: 35px;
        color: #000;
        border: 1px solid #666;
        background-color: #999;
      }
    }
  }
  .el-button-group {
    display: block;
    margin-top: 10px;
    border-radius: 10px;
    .el-button {
      width: 50%;
    }
  }
}
</style>
