<template>
<div class="hotGoods">
  <div v-for="(item,index) in hotGoods" :key="index" @click="$router.push({params:{goodsId:item.goodsId},name:'detail'})">
      <img :src="item.image" alt="">
      <p>{{item.goodsName}}</p>
      <p>${{item.Price | toFixed}}</p>
  </div>
  </div>
</template>

<script>
export default {
    name:'hotGoods',
    props:['hotGoods']
}
</script>

<style scoped lang="less">
.hotGoods{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 14px;
    text-align: center;
    div{
        width:50%;
        img{max-width: 100%;}
        p{margin:5px 0 ;}
    }

}
</style>