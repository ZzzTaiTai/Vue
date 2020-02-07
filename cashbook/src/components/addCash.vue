<template>
  <div class="add-cash">
      <a href="javascript:;" class="add-btn"  @click="addCash">
        <i class="el-icon-plus"></i>
        <h1 class="title">记一笔</h1>
      </a>
      <div class="add-warp">
          <div class="box-head">
              <ul>
                <li>{{addDate}}</li>
                <li></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'addCash',
  data() {
      return {
           addDate:null
      }
  },
  created() {
  },
  methods: {
      addCash(){

      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .add-cash{
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100%;
        background: #ffffff;
        &:hover{
            opacity: .8;
        }
        .title{
            display: inline-block;
            font-size: 16px;
            color: #409EFF;
        }
        i{  
            display: inline-block;
            margin-right: 5px;
            font-size: 18px;
            color: #409EFF;
        }
    }
    .add-warp{
        .box-head{
            ul{
                display: flex;
                align-items: center;
                li{
                    flex:0 0 33.3%;
                    height:50px;
                }
            }
        }
    }
</style>
