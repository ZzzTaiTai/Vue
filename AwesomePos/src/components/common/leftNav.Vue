<template>
  <div class="leftNav">
      <ul>
        <li>
          <i class="icon iconfont icon-goumai"></i>
          <div>收银</div>
        </li>
        <li>
          <i class="icon iconfont icon-dianpu"></i>
          <div>店铺</div>
        </li>
        <li>
          <i class="icon iconfont icon-hanbao"></i>
          <div>商品</div>
        </li>
        <li>
          <i class="icon iconfont icon-huiyuanqia"></i>
          <div>会员</div>
        </li>
        <li>
          <i class="icon iconfont icon-wo"></i>
          <div>统计</div>
        </li>
         <li>
          <i class="icon iconfont icon-gongnengjianyi"></i>
          <div>统计</div>
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'leftNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.leftNav{
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1D8CE0;
  float: left;
  width: 5%;
}
.iconfont{
  font-size: 24px;
}
.leftNav ul{
  padding: 0px;
  margin: 0px;
}
.leftNav li{
  list-style: none;
  text-align: center;
  border-bottom:1px solid rgb(4, 150, 247);
  padding: 10px; 
}
</style>
