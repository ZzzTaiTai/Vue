<template>
  <div class="pos">
    <el-row>
      <el-col :span='7' class="posOrder" id="orderList">
        我是订单栏
      </el-col>
      <el-col :span='7'>
        我是产品栏
      </el-col>
      <el-col>
        我是产品栏
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("orderList").style.height=orderHeight+"px";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posOrder{
  background-color:#F9FAFC ;
  border-right:1px solid rgb(96, 169, 252); 
}
</style>
