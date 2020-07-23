<template>
  <div class="infos">
    <div class="infos-head" >
      <van-icon name="arrow-left" size="28" @click="goBack" />
      <h2>详情</h2>
    </div>
    <div class="infos-box" v-if="curData">
      <div class="date-card">
        <span class="date">{{ date }}</span><i> / </i><span class="bank-num">{{ accountInfo }}</span>
      </div>
      <div class="detail" @click="showCash">
          <span class="iconBox">
            <i class="iconfont" :class="'icon-' + iconMap[curData.iconNum].className"></i>
          </span>
          <span class="info">{{ curData.typeName }}</span>
          <em class="num">{{ curData.money }}<van-icon name="arrow-right" size="24" /></em>
      </div>
      <div class="remark">
        <van-field v-model="curData.name"></van-field>
      </div>
    </div>
     <addCash :isShow="isShow" :cashData="curData" @showAdd="showCash"></addCash>
  </div>
</template>

<script>
import addCash from "@/components/addCash";
export default {
  name: 'infos',
  data() {
    return {
      isShow:false,
      curData:null,
      iconMap:this.$icon.iconMap
    }
  },
  props:['id'],
  components:{
    addCash
  },
  created() {
    if(this.id){
      this.$axios
        .post('/data/dataLists',{id:Number(this.id)})
        .then( res => {
          this.curData = {...res.data};
      })
    }
  },
  computed:{
    accountInfo() {
      if(!this.curData) return;
      if(!this.curData.account.info) return this.curData.account.name;
      return this.curData.account.info + this.curData.account.bankNum;
    },
    date() {
      if(!this.curData) return;
      return this.$filters.allDateFormat(new Date(this.curData.time),'MM月dd日  EEE');
    }
  },
  methods:{
    goBack() {
      this.$router.go(-1)
    },
    showCash() {
      this.isShow = !this.isShow;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.infos{
  .infos-head{
    display: flex;
    align-items: center;
    height: 48px;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size:16px;
    h2{
      margin-left:10px;
    }
  }
  .infos-box{
    .date-card{
      padding:0 15px;
      font-size: 14px;
      color:#777777;
    }
    .detail{
      display: flex;
      align-items: center;
      margin-top:5px;
      padding:5px 10px;
      font-size: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .iconBox {
        display: flex;
        flex:0 0 auto;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        background: #8cc94d;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        .iconfont {
          color: #fff;
          font-size: 24px;
        }
      }
      .info{
        flex:2
      }
      .num{
        flex: 1;
        text-align: right;
      }
    }
    .remark{
      font-size: 18px;
      margin:5px 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
