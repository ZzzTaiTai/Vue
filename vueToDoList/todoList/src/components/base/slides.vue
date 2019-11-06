<template>
   <van-swipe :autoplay="3000" >
    <van-swipe-item v-for="(image,index) in slides" :key="index">
      <img :src="image.imageUrl" width="100%" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import {Swipe, SwipeItem} from "vant"
export default {
    name:"slides",
    props:['slides'],
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    }
}

</script>
<style>
</style>