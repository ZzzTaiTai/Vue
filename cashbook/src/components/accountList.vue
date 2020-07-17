<template>
  <div class="account-List">
    <div class="itemsBox">
        <ul>
          <li v-for="item in newList" :key="item.id">
          <div class="infoBox" v-if="item.data[0].account.bankType">
              <em class="icoBox"><i class="iconfont"  :class="dataImg[item.data[0].account.bankType].icon" :style="dataImg[item.data[0].account.bankType]"></i></em>
              <span class="itemName">{{item.name}}</span>
          </div>
          <div class="infoBox" v-else>
              <em class="icoBox"><i class="iconfont icon-gongzi"></i></em>
              <span class="itemName">未分类</span>
          </div>
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
export default {
  name: "accountList",
  data() {
    return {
      newList:[],
      dataImg:{
        "ICBC": {
          icon:"icon-gsyh",
          color:"#e64343"
        },
        "CCB": {
          icon:"icon-jsyh",
          color:"#1e2e8c"
        },
        "ABC": {
          icon:"icon-nyyh",
          color:"#060"
        },
        "BOC": {
          icon:"icon-zgyh",
          color:"#e64343"
        },
        "CMB": {
          icon:"icon-zsyh",
          color:"#e64343"
        },
        "HB": {
          icon:"icon-zhifubao",
          color:"#1296db"
        },
        "YEB": {
          icon:"icon-zhifubao",
          color:"#1296db"
        },
        "YE": {
          icon:"icon-zhifubao",
          color:"#1296db"
        }
      }           
    }
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
        align-items: center;
        justify-content: space-between;
        height: 100px;
        font-size: 18px;
        color: rgba(0,0,0,.8);
        @include border-1px(#a0a0a0);
      }
      .infoBox{
        display: flex;
        align-items: center;
        .icoBox {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(17,142,234);
        width: 65px;
        height: 65px;
        i{
          display: flex;
          align-items: center;
          justify-content: center;
          width:35px;
          height:35px;
          background: #fff;
          border-radius:50%;
          font-size:24px;
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