<template>
  <div class="nav">
        <van-icon name="arrow-left " size="28" @click="back" />
        <h2 class="title">{{title}}</h2>
    </div>
</template>

<script>
export default {
    name:'headerNav',
    props:{
        title:String
    },
    methods: {
        back(){
            this.$router.go(-1);
        }
    },
}
</script>

<style lang="scss" scope>
@import '../../common/css/mixin.scss';
    .nav{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: #fff;
        @include border-1px(rgba(0,0,0,.2));
        .van-icon{
            position: absolute;
            left: 16px;
            color:rgba(0,0,0,.5);
            cursor: pointer;
        }
        h2{
            font-size: 20px;
        }
    }
</style>