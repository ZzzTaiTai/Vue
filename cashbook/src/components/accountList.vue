<template>
  <div class="account-List">
    <div class="itemsBox">
        <ul>
          <li v-for="item in newList">
           <em class="icoBox"><i class="iconfont icon-gsyh"></i></em>
          <span class="itemName">{{item.name}}</span>
          <span class="itemMoney">
            <p>-{{item.expenseTotal}}</p>
            <p>{{item.incomeTotal | IntegerFormat}}</p>
          </span>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
const dataLabelImg = {
  其他: "icon-qian",
  购物: "icon-gouwu",
  一般: "icon-13",
  qh: "icon-qiehuan"
};
export default {
  name: "accountList",
  data() {
    return {
      newList:[]
    };           
  },
  props: ['list'],
  created() {
    this.newList = this._recombination(this.list);
  },
  computed: {
    
  },
  watch: {
    list(){
      this.newList = this._recombination(this.list);
    }
  },
  methods: { 
    _recombination(data){
      let ary = [];
      data.forEach((item)=>{
        let num = ary.findIndex((newItem) => newItem.name === item.account.name);
        if(num === -1){
            let  expenseTotal = 0,
                    incomeTotal = 0;
            if (item.money < 0) {
              expenseTotal += Math.abs(item.money);
            } else {
              incomeTotal += parseInt(item.money);
            }
          ary.push({
            name:item.account.name,
            data:[item],
            expenseTotal: expenseTotal,
            incomeTotal: incomeTotal,
            })
        }else{
          if (item.money < 0) {
              ary[num].expenseTotal += Math.abs(item.money);
            } else {
              ary[num].incomeTotal += parseInt(item.money);
            }
          ary[num].data.push(item)
        }
      })
      return ary
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope lang="scss">
@import "../common/css/mixin.scss";

.account-List {
  .itemsBox{
    padding:0 10px;
      li{
        display: flex;
        height: 100px;
        font-size: 18px;
        color: rgba(0,0,0,.8);
        align-items: center;
        @include border-1px(#a0a0a0);
      }
     
      .icoBox {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(17,142,234);
        width: 65px;
        height: 65px;
        &.jsyh{
          i{

          }
        }
        &.gsyh{
           i{
              color:rgb(221,14,28)
           }
          }
        i{
          display: flex;
          align-items: center;
          justify-content: center;
          width:35px;
          height:35px;
          background: #fff;
          border-radius:50%;
          font-size:24px;
          &.icon-gsyh{
            // color:rgb(221,14,28)
          }
          &.icon-jsyh{

          }
        }
      }
      .itemName{
        flex:1;
        padding:0 10px;
      }
      .itemMoney{
        color: rgba(0,0,0,.6);
        text-align: right;
        p{
          margin-top:10px;
          overflow: hidden;
          &:first-child{
            color: rgba(0,0,0,.9);
          }
        }
      }
  }
  
      
  
}
</style>