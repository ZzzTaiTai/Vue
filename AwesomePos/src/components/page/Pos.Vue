<template>
  <div class="pos">
    <el-row>
      <el-col :span='6' class="posOrder" id="orderList">
        <el-tabs class="">
          <el-tab-pane  label="点餐"  >
            <el-table  :data="tableData" boder style="width:100%">
          <el-table-column prop="goodsName" label="商品名称">
          </el-table-column>
          <el-table-column prop="count" label="数量" width="60">
          </el-table-column>
          <el-table-column prop="price" label="金额" width="60">
          </el-table-column>
           <el-table-column fixed="right" label="操作" width="90">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="delOrderList(scope.row)">删除</el-button>
              <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
            </template>
          </el-table-column>
          </el-table>
          <div class="totalDiv">
            <span>数量：{{ totalCount }}</span>
            <span>金额：{{ totalMoney }}元</span> 
          </div>
          <div class="" style="margin-top:5%">
            <el-button type="warning" size="">挂单</el-button>
            <el-button type="danger" size="" @click="delAllfoods()">删除所有</el-button>
            <el-button type="primary" size="" @click="checkout()">结账</el-button>
          </div>
          </el-tab-pane>
          <el-tab-pane label="挂单" >挂单</el-tab-pane>
          <el-tab-pane label="外卖" >外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='16' class="three">
        <div>
          <div class="title">常用商品</div>
          <div class="oftenGoodsList">
            <ul>
              <li v-for = "item in oftenGoods" @click="addOrderList(item)" :key="item.goodsId" >
                <!-- <img :src="item.goodsImg" alt=""> -->
                <span>{{ item.goodsName }}</span>
                <span class="oPrice">￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
        <div class="goods-type">
          <el-tabs value="first">
          <el-tab-pane label="汉堡" name="first" Medium>
            <div class="oftenGoodsList">
            <ul>
              <li v-for = "item in type0Goods"  :key="item.goodsId" @click="addOrderList(item)">
                <!-- <img class="foodImg" :src="item.goodsImg" alt=""> -->
                <span class="foodName">{{ item.goodsName }}</span>
                <span class="foodPrice">￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
          </el-tab-pane>
          <el-tab-pane label="小食" name="second">
            <div class="oftenGoodsList">
            <ul>
              <li v-for = "item in type1Goods" :key="item.goodsId" @click="addOrderList(item)">
                <!-- <img class="foodImg" :src="item.goodsImg" alt=""> -->
                <span class="foodName">{{ item.goodsName }}</span>
                <span class="foodPrice">￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>

          </el-tab-pane>
          <el-tab-pane label="饮料" name="third">
            <div class="oftenGoodsList">
            <ul>
              <li v-for = "item in type2Goods" :key="item.goodsId" @click="addOrderList(item)">
               <!-- <img class="foodImg" :src="item.goodsImg" alt=""> -->
                <span class="foodName">{{ item.goodsName }}</span>
                <span class="foodPrice">￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
          </el-tab-pane>
          <el-tab-pane label="套餐" name="fourth">
            <div class="oftenGoodsList">
            <ul>
              <li v-for = "item in type3Goods" :key="item.goodsId" @click="addOrderList(item)">
                <!-- <img class="foodImg" :src="item.goodsImg" alt=""> -->
                <span class="foodName">{{ item.goodsName }}</span>
                <span class="foodPrice">￥{{ item.price }}元</span>
              </li>
            </ul>
          </div>
          </el-tab-pane>
      </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'pos',
  data(){
    return{
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney:0,
      totalCount:0
      
    }
  },
  created:function(){
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
    .then(response=>{
      // console.log(response.data)
      this.oftenGoods=response.data;
    })
    .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
      })
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
      .then(response=>{
      this.type0Goods=response.data[0];
      this.type1Goods=response.data[1];
      this.type2Goods=response.data[2];
      this.type3Goods=response.data[3];
      // console.log(this.type0Goods)
      // console.log(this.type0Goods[0].goodsImg)
    })
    .catch(error=>{
          console.log(error);
          alert('网络错误，不能访问');
    });
  },
  mounted:function(){
    var orderHeight=document.body.clientHeight;
    console.log(orderHeight);
    document.getElementById("orderList").style.height=orderHeight+"px";
    // for (let index = 0; index < this.type0GoodsImg.length; index++) {
    //     this.type0Goods[index].goodsImg=this.type1GoodsImg[index];
    //   }
      // console.log(type0Goods);
  },
  methods: {
    addOrderList(goods){
      this.totalMoney=0
      this.totalCount=0
      let isHave=false;
      for (let i = 0; i <this.tableData.length; i++) {
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave=true
        }
        }
        if(isHave){
          let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
          arr[0].count++;
        }else{
          let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
          this.tableData.push(newGoods)
        }
       this.getAllMoney();
    },
    delOrderList(goods){
      this.totalMoney=0
      this.totalCount=0
      this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
      this.getAllMoney();
    },
    getAllMoney(){
      this.totalMoney=0;
      this.totalCount=0;
      if(this.tableData){
        this.tableData.forEach(element => {
          this.totalCount+=element.count;
          this.totalMoney=this.totalMoney+(element.price*element.count)
        });
      }
    },
    delAllfoods(){
      this.totalMoney=0;
      this.totalCount=0;
      this.tableData=[];
    },
    checkout(){
      if(this.totalCount!=0){
        this.totalMoney=0;
        this.totalCount=0;
        this.tableData=[];
        this.$message({
          message:'结账成功，感谢你又为店里出了一份力!',
          type:'success'
        })
      }
      else{
        this.$message.error('不能空结账');
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clear{
  clear:both
}
img{
  width: 100%;
}
.posOrder{
  background-color:#F9FAFC ;
  height: 100%;
  border-right:1px solid rgb(96, 169, 252); 
}
.title{
  /* width: 100%; */
  height: 20px;
  border-bottom: 1px solid #D3dce6;
  background-color: #F9FAFC;
  padding: 10px;
  text-align: left;
  }
  .three{
    background-color:rgb(233, 244, 247);
  }
  .oftenGoodsList ul{
    display: block;
  }
  .oftenGoodsList ul li{
    cursor: pointer;
    list-style: none;
    float: left;
    padding: 10px 5px;
    width: 20%;
    height: auto;
    border: 1px solid #888;
    margin: 10px;
    border-radius: 10px;
  }
  .oftenGoodsList ul li .oPrice{
   color:rgb(96, 169, 252); 
    }
 .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
 
   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
 
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   .totalDiv{
     background-color: #999;
     padding: 10px;
     border-bottom: 1px solid #666;
   }
  .totalDiv span{
    color: antiquewhite;
    padding:0 10px;
   }
</style>
