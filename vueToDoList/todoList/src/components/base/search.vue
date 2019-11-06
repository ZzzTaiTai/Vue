<template>
  <form action="/">
  <van-search
    v-model="curValue"
    placeholder="请输入搜索关键词"
    show-action
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
</template>

<script>
export default {
    name:"search",
    data() {
      return {
        curValue:this.value
      }
    },
    methods: {
      onSearch(e){
        console.log(e)
      },
      onCancel(){}
    },
    props:['value'],
    watch: {
      curValue(newVal,oldVal){
      // console.log('newVal',newVal);
      // console.log('oldVal',oldVal);
    }
    },
}

</script>
<style>
</style>