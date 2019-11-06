<template>
    <div class="container">
      <div class="base-info">
        <div class="user-look">
          <img :src="userImg" alt="">
        </div>
        <div class="user-name">
          <p>TimTim</p>
          <p>普通用户</p>
        </div>
        <van-icon name="setting-o" class="van ico-set" size="25px"></van-icon>
      </div>
      <div class="base-order">
        <div class="orderBox">
          <div class="title">
            <span>我的订单</span>
            <a href="javascript:;" class="allOrder">全部订单 ></a>
          </div>
          <div class="orderList">
            <a href="javascript:;"><van-icon name="pending-payment" class="van ico-set" size="26px"></van-icon >待付款</a>
            <a href="javascript:;"><van-icon name="tosend" class="van ico-set" size="26px" info="5"></van-icon>待发货</a>
            <a href="javascript:;"><van-icon name="logistics" class="van ico-set" size="26px"></van-icon>待收货</a>
            <a href="javascript:;"><van-icon name="records" class="van ico-set" size="26px"></van-icon>退款售后</a>
          </div>
        </div>
      </div>
      <div class="base-quan">
        <div class="orderBox">
          <div class="title">
            <span>我的电子券</span>
            <a href="javascript:;" class="allOrder">全部电子券 ></a>
           
          </div>
          <div class="orderList">
            <a href="javascript:;"><van-icon name="cart-circle-o" class="van ico-set" size="26px"></van-icon>待使用</a>
            <a href="javascript:;"><van-icon name="todo-list-o" class="van ico-set" size="26px" info="5"></van-icon>已使用</a>
            <a href="javascript:;"><van-icon name="bag-o" class="van ico-set" size="26px"></van-icon>过期</a>
          </div>
        </div>
      </div>
      <div class="baseList">
        <div class="orderList">
           <van-cell icon="cart-circle-o" title="我的收藏" is-link />
           <van-cell icon="gold-coin-o" title="收货地址" is-link />
           <van-cell icon="gift-o" title="我收到的礼物" is-link />
            <!-- <a href="javascript:;"><em><van-icon name="cart-circle-o" class="van ico-set" size="20px"></van-icon>我的收藏</em><i>></i></a>
            <a href="javascript:;"><em><van-icon name="gold-coin-o" class="van ico-set" size="20px" ></van-icon>收货地址</em><i>></i></a>
            <a href="javascript:;"><em><van-icon name="gift-o" class="van ico-set" size="20px"></van-icon>我收到的礼物</em><i>></i></a> -->
        </div>
      </div>
      <tabBar :active='3'></tabBar>
    </div>
</template>
<script>
import tabBar from '../base/tabBar'
export default {
  name:"Personal",
  data() {
    return {
      userImg:require('../../assets/images/user.jpg'),
    }
  },
  components:{tabBar}
}
</script>
<style scoped lang="less">
.container{
  background-color: #dddddd38;
  .van-info{top:5px;right:10px;}
  .van-cell{font-size: 18px;}
  .base-info{
    background-color:rgb(250, 206, 125);
    display: -webkit-flex; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items:center;
    padding:20px 50px;
    .user-look{
      width:50px;
      height:50px;
      margin-right:25px;
      img{
        max-width:100%;
        height: 100%;
        border-radius:50%;
      }
    }
    .user-name p{
      font-size:16px;
      margin:.35rem 0;
    }
    .ico-set{
      position: absolute;
      top:5px;
      right:5px;
      color:#ffffff;
    }
  }
  .base-quan,.base-order{
      font-size: 16px;
      margin-top:.4rem;
      background: #ffffff;
      border-top:1px solid #e0dfdf;
      a{color: #2c3e50;}
      .title{
        display: flex;
        justify-content: space-between;
        padding:10px 15px;
        .allOrder{color:#999999;}
      }
      .orderList {
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding:8px 0;
        border:1px solid #e0dfdf;
        border-left:0;
        border-right:0;
        .van-icon{
          display: block;
          color: #2c3e50;
          margin-bottom: 5px;
        }
      }
  }
  .baseList{
     font-size: 20px; 
      margin-top:.4rem;
      background: #ffffff;
      border-top:1px solid #e0dfdf;
      a{
        display:flex;
        color: #2c3e50;
        justify-content: space-between;
        align-items: center;
      }
       .van-cell__left-icon{
         font-size: 18  px;
          margin-right:10px;
        }
  }
  
}

</style>
