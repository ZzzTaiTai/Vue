<template>
<div class="loading">
     <van-loading color="#1989fa"/>
</div>
</template>
<script>
export default {
    name:"loading",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped lang="scss">
.loading{
    position: relative;
    top:10px;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    text-align: center;
    }
</style>