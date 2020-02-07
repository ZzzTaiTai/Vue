<template>
  <div class="book-List">
  <dl v-for="item in bookList" :key="item.id">
    <dt><span class="time">{{ item.time | dateFormat }}</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">{{ item.money | IntegerFormat}}}元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
  <dl>
    <dt><span class="time">29日-星期三</span><span>支出:12元 <span class="">收入:321元</span></span></dt>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
    <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
   <dd><span class="iconBox"><i class="iconfont icon-qian"></i></span><span class="info">余额宝-2020.1.2-收益</span><em class="num">+12元</em></dd>
  </dl>
    <dl>
    <dt>T</dt>
    <dd>Ted Leo & The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </dl>
    <dl>
    <dt>T</dt>
    <dd>Ted Leo & The Pharmacists</dd>
    <dd>T-Pain</dd>
    <dd>Thrice</dd>
    <dd>TV On The Radio</dd>
    <dd>Two Gallants</dd>
  </dl>
  </div>
</template>

<script>
export default {
  name: 'bookList',
  data() {
    return {
      bookList:[],
      dataTest:"2020-02-01"
    }
  },
  created() {
    this.classMap = ['fushi', 'yundong', '13', 'gouwu', 'chifancopy-','meirong','yiliao','xuexi','qian'];
    this.$axios.get('https://easy-mock.com/mock/5e33d958efe660215074f675/cash/bookLists')
    .then(response =>{
      this.bookList = response.data.data.course_list;
      console.log(this.bookList);
    })
    .catch(error =>{
      this.bookList = [
        {"id":1,"name":"余额宝","time":"2020-1-31","money":2558.12,"iconNum":8},
        {"id":5,"name":"余额宝","time":"2020-1-30","money":8432.64,"iconNum":15},
        {"id":10,"name":"余额宝","time":"2020-1-29","money":1222.48,"iconNum":7},
        {"id":2,"name":"余额宝","time":"2020-1-31","money":697.98,"iconNum":5},
        {"id":6,"name":"余额宝","time":"2020-1-30","money":2958.55,"iconNum":11},
        {"id":11,"name":"余额宝","time":"2020-1-29","money":3449.04,"iconNum":5},
        {"id":3,"name":"余额宝","time":"2020-1-31","money":8166.05,"iconNum":14},
        {"id":7,"name":"余额宝","time":"2020-1-30","money":9212.26,"iconNum":15},
        {"id":12,"name":"余额宝","time":"2020-1-29","money":4839.26,"iconNum":12},
        {"id":4,"name":"余额宝","time":"2020-1-31","money":2723.04,"iconNum":13},
        {"id":8,"name":"余额宝","time":"2020-1-30","money":8348.58,"iconNum":4},
        {"id":13,"name":"余额宝","time":"2020-1-29","money":6718.55,"iconNum":11},
        {"id":5,"name":"余额宝","time":"2020-1-31","money":1601.18,"iconNum":3},
        {"id":9,"name":"余额宝","time":"2020-1-30","money":7546.81,"iconNum":2},
        {"id":14,"name":"余额宝","time":"2020-1-29","money":2552.55,"iconNum":5}]
    })
  },
  methods: {
    iconType (){
      return "icon-"+this.classMap[8]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../common/css/mixin.scss';

.book-List{
  height: calc(100vh - 185px);
  min-height: 485px;
  
  overflow-y: auto;
  dl {
    margin: 0;
    line-height: 18px;
    &:first-child{
      padding:0;
    }
  dt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #989EA4;
    margin: 0;
    padding: 5px 12px;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    font-size: 14px;
    background: #fff;
    transition: all .5s;
    z-index: 2; 
    }
  dd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    white-space: nowrap;
    height: 60px;
    @include border-1px(#8a8a8a);
    .iconBox{
      display: flex;
      align-items: center;
      justify-content: center;
      background: #8CC94D;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      .iconfont{
          color: #fff;
          font-size: 24px;
      }
    }
    &:nth-child(even){
      .iconBox{
          background: #FF650D;
      }
    }
    &:last-child{
      border: 0;
    }
    .info{
      flex: 2;
      padding: 0 50px 0 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .num{
      font-size: 12px;
      color: #989EA4;
    }
  }




}

}

</style>
