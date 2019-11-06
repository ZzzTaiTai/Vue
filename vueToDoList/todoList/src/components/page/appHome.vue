<template>
<div class="container">
  <search :value="value"></search>
  <div class="home-class">
   <slides :slides="slides"></slides>
  </div>
  <div class="cateList">
    <div v-for="(item,index) in category" :key="index">
      <a><img :src="item.image" alt=""><p>{{ item.categoryName }}</p></a>
    </div>
  </div>
  <div class="picture">
    <img :src="picture.address" alt="" width="100%" height="60">
  </div>
  <div class="recommend whiteBg">
    <h3>商品推荐</h3>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in recommend" :key="index"> 
        <div class="item">
          <img :src="slide.image" alt="">
          <p>{{ slide.goodsName }}</p>
          <p>￥{{ slide.Price |toFixed }}({{slide.mallPrice |toFixed}})</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
    <tabBar :active='0'></tabBar>
   </div>
</template>
<script>

import tabBar from "../base/tabBar"
import {getSlidesData} from "../../api/index"
import slides from "../base/slides"
import search from "../base/search"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name:'appHome',
  data() {
    return {
     slides: [{
        "imageUrl": "https://img.youpin.mi-img.com/youpinoper/11c51787d036d50b7e5f39d6306e99e8.jpg?id=&w=1080&h=450",
        "imgId": "120000200902144526"
      }, {
        "imageUrl": "https://img.youpin.mi-img.com/youpinoper/f933d675050151bfed8c28de5236724f.jpg?id=&w=1080&h=450",
        "imgId": "310000198909022842"
      }, {
        "imageUrl": "https://img.youpin.mi-img.com/youpinoper/c2a5a22ea5bb5c2b6dd61164a79d0b7a.jpg?id=&w=1080&h=450",
        "imgId": "410000200712286688"
      }],
      category:[{
        'categoryId':1,
        'image':"https://img.youpin.mi-img.com/jianyu/3fc26de3e9c91dba0b470ae0dfd668d1.png?w=126&h=126",
        'categoryName':'每日新品'
      },{
        'categoryId':2,
        'image':"https://img.youpin.mi-img.com/jianyu/0301aee7e1d9d33c8b6db6481c0aea74.png?w=126&h=126",
        'categoryName':'小米众筹'
      },{
        'categoryId':3,
        'image':"https://img.youpin.mi-img.com/jianyu/994c5e95f79a7874a73e6935832bb0e4.png?w=126&h=126",
        'categoryName':'限时抢购'
      },{
        'categoryId':4,
        'image':"https://img.youpin.mi-img.com/jianyu/e3a7c62f0546d492017e09e3e5d5e3ea.png?w=126&h=126",
        'categoryName':'热销榜单'
      },{
        'categoryId':5,
        'image':"https://img.youpin.mi-img.com/jianyu/f232f1640b3bb2b47e32d82da35d5a04.png?w=126&h=126",
        'categoryName':'新品自营'
      }],
      picture:{address:'https://img.youpin.mi-img.com/yingkebao/90337d93e628939c590fbe1a1cf338bf.gif?w=1080&h=210'},
      recommend:[{
        'goodsId':0,
        'goodsName':'夜光单日历机械表',
        'image':'https://img.youpin.mi-img.com/shopmain/a80fded35301e48cac68096d1b6f2b03.jpg',
        'mallPrice':178,
        'Price':423
      },{
        'goodsId':0,
        'goodsName':'平仄原味茶饮料',
        'image':'https://img.youpin.mi-img.com/800_pic/a003eb4e5aa6b0046bba141c518968d2.jpg',
        'mallPrice':29,
        'Price':50
      },{
        'goodsId':0,
        'goodsName':'90分户外双肩包',
        'image':'https://img.youpin.mi-img.com/800_pic/afa221dd282bbf89c79b8bd93f4adfc0.jpg',
        'mallPrice':102,
        'Price':500
      },{
        'goodsId':0,
        'goodsName':'平仄原味茶饮料',
        'image':'https://img.youpin.mi-img.com/800_pic/a003eb4e5aa6b0046bba141c518968d2.jpg',
        'mallPrice':29,
        'Price':50
      },{
        'goodsId':0,
        'goodsName':'90分户外双肩包',
        'image':'https://img.youpin.mi-img.com/800_pic/afa221dd282bbf89c79b8bd93f4adfc0.jpg',
        'mallPrice':102,
        'Price':500
      },{
        'goodsId':0,
        'goodsName':'夜光单日历机械表',
        'image':'https://img.youpin.mi-img.com/shopmain/a80fded35301e48cac68096d1b6f2b03.jpg',
        'mallPrice':178,
        'Price':423
      }],
      value:'',
      swiperOption:{
        slidesPerView:3
      }

    }
  },
  components:{
    tabBar,
    slides,
    search,
    swiper,
    swiperSlide
    },
  created() {
    // getSlidesData().then(res=>{
    //   this.slides=res.slides;
    //   console.log(this.slides)
    // }).catch(error=>{
    //   console.log(error)
    // })
  },
  watch: {
    
  },
}
</script>
<style scoped lang="less">
.container{background-color: #99999938;}
.cateList{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between; 
  text-align: center;
  font-size: 14px;
  padding:10px 15px;
  background-color: #fff;
  margin-top:5px;
  img{
    height: 45px;
    width: 45px;
   }
    p{margin-top:6px;}
}
.recommend{
  h3{
    font-size: 16px;
    font-weight: 700;
    padding:15px;
    color:#e11488;
    border-bottom:1px solid #ddd;
    }
  .item{
    box-sizing:border;
    padding:10px;
    text-align: center;
    border-right:1px solid #ddd;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
      margin:5px 0;
    }
    img{max-width:100%;}
    }
}
</style>
