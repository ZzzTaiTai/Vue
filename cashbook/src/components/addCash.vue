<template>
  <div class="add-cash">
      <!-- <a href="javascript:;" class="add-btn"  @click="addCash()">
        <i class="el-icon-plus"></i>
        <h1 class="title">记一笔</h1>
      </a> -->
      <div class="add-warp">
          <van-popup v-model="isAdd" position="bottom" :style="{ height: '100%' }" >
            <div class="add-head">
                <van-icon name="arrow-left" size="28" @click="isShow()" />
                <van-dropdown-menu>
                  <van-dropdown-item v-model="value" :options="option" />
                </van-dropdown-menu>
            </div>
            <div class="box-head">
                <ul class="box-headBtn">
                    <li @click="isDate = !isDate">{{currentDate | pickerFormat}}</li>
                    <li @click="isInfo = !isInfo">备注</li>
                    <li @click="isAccount = !isAccount">{{selectedAct}}</li>
                </ul>
                <div class="box-popup">
                  <van-popup v-model="isDate" :style="{ width:'80%' }">
                      <van-datetime-picker
                        v-model="currentDate"
                        type="date"
                        :min-date="minDate"
                        :max-date="maxDate"
                        @cancel="isDate = false"
                        @confirm="isDate = false"
                      />
                    </van-popup>
                    <van-popup v-model="isInfo" :style="{ width:'80%' }">
                      备注待处理
                    </van-popup>
                    <div class="accountList">
                      <van-popup v-model="isAccount" :style="{ width:'80%' }">
                      <div class="title">
                        <h1>选择账户</h1>
                      </div>
                      <ul>
                        <li v-for="(item,actIndex) in accountList" :key="item.cardId" :class="{'active':actIndex == accountIndex}" @click="selectAct(actIndex)">
                          <van-cell clickable center>
                            <p>{{item.name}}{{item.info}}<span v-if="item.bankNum">尾号{{item.bankNum}}</span></p>
                            <p>余额未设置</p>
                            <template #right-icon>
                               <van-icon name="success" />
                            </template>
                          </van-cell>
                        </li>
                      </ul>
                    </van-popup>
                    </div>
                    
                </div>
            </div>
            <div class="swipe-box">
                <van-swipe class="add-swipe" :autoplay="0" indicator-color="#888888">
                  <div v-for="(item,indexNum) in iconMap" :key="indexNum">
                    <van-swipe-item  v-if="indexNum%10==0">
                      <ul >
                        <li v-for="(curItem,index) in iconMap.slice(indexNum, indexNum+10)" :key="index" :class="{'active':indexActive === curItem.className}" @click="changeActive(curItem.className)">
                          <i class="iconfont"  :class="'icon-' + curItem.className"></i>{{curItem.name}}
                        </li>
                      </ul>
                    </van-swipe-item>
                  </div>
                </van-swipe>
            </div>
            <div class="money-keyboard">
              <van-cell-group>
                <van-field
                  v-model="curMoneny"
                  label="金额："
                  placeholder="0"
                  input-align="right"
                  clearable
                  @focus="inputNone"
                />
              </van-cell-group>
              <van-number-keyboard
                :show="isAdd"
                :maxlength="8"
                v-model="curMoneny"
                theme="custom"
                extra-key="."
                close-button-text="完成"
                @blur="done"
              />
            </div>
          </van-popup>
      </div>
  </div>
</template>

<script>
export default {
  name: "addCash",
  data() {
    return {
      value:"支出",
      curMoneny:"",
      isDate: false,//显示日历框
      isInfo:false,
      isAccount:false,
      addDate: null, 
      curAccount:null,
      accountIndex:null,//当前账号的index
      option: [
        { text: '支出', value: "支出", icon:'* iconfont icon-wsmp-expenditure'},
        { text: '收入', value: '收入', icon:'* iconfont icon-zhichu' },
      ],
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      iconMap: [],
      curIcon: '',
      indexActive:null,
      accountList:[
          {
            cardId:1,
            name: "中国建设银行",
            bankType:"CCB",
            isBank: true,
            info: "信用卡",
            bankNum: "2555"
          },
          {
            cardId:2,
            name: "中国银行",
            bankType:"BOC",
            isBank: true,
            info: "信用卡",
            bankNum: "7222"
          },
          {
            cardId:3,
            name: "中国工商银行",
            bankType:"ICBC",
            isBank: true,
            info: "储蓄卡",
            bankNum: "2541"
          },
          {
            cardId:4,
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }, 
          {
            cardId:5,
            name: "花呗",
            bankType:"HB",
            isBank: false,
            info: "",
            bankNum: ""
          },
      ]
    };
  },
  props:['isAdd'],
  created() {
    this.iconMap =[
      {"className":"gongzi","name":"一般",},
      {"className":"canyin","name":"餐饮",},
      {"className":"gouwu","name":"购物",},
      {"className":"fushi","name":"服饰",},
      {"className":"jiaotong","name":"交通",},
      {"className":"yule","name":"娱乐",},
      {"className":"shejiao","name":"社交",},
      {"className":"jujia","name":"居家",},
      {"className":"tongxun","name":"通讯",},
      {"className":"lingshi","name":"零食",},
      {"className":"meirong","name":"美容",},
      {"className":"yundong","name":"运动",},
      {"className":"lvxing","name":"旅行",},
      {"className":"shuma","name":"数码",},
      {"className":"xuexi","name":"学习",},
      {"className":"yiliao","name":"医疗",},
      {"className":"shuji","name":"书籍",},
      {"className":"chongwu","name":"宠物",},
      {"className":"caipiao","name":"彩票",},
      {"className":"qiche","name":"汽车",},
      {"className":"bangong","name":"办公",},
      {"className":"zhufang","name":"住房",},
      {"className":"liwu","name":"礼物",},
      {"className":"lijin","name":"礼金",},
      {"className":"licai","name":"理财",}
    ]
  },
  computed: {
    selectedAct(){
      if(!this.curAccount) return "账户"
      if(!this.curAccount.info) return this.curAccount.name
      return this.curAccount.info + this.curAccount.bankNum
    }
  },
  methods: {
    isShow(){
      this.$emit('showAdd');
    },
    changeActive(name){
      this.indexActive = name;
    },
    inputNone() {
      document.activeElement.blur();
    },
    selectAct(curNum){
      this.accountIndex = curNum;
      this.isAccount = !this.isAccount;
      this.curAccount = this.accountList[curNum]
    },
    done() {
      // let data =
    }
  }
};
</script>
<style lang="scss">
.van-dropdown-item{
  top:0!important;
}
.van-popup--top{
  left:20px!important;
  top:50px!important;
  width:30%!important;
  transform: translate3d(0px, 0px, 0px)!important;
  transition-duration: 0.1s!important;
  overflow: unset!important;
  &::after{
    position: absolute;
    top:-16px;
    left:20px;
    border:8px solid transparent;
    border-bottom-color:#fff;
    content: '';
  }
}
.van-dropdown-menu__title{
  &::after{
    top: 100%!important;
    margin:0!important;
    -webkit-transform: rotate(-45deg)!important;
    transform: rotate(-45deg)!important;
    border-color: #dcdee0 transparent transparent transparent!important;
  }
}
.van-dropdown-menu__title--active{
  color: #323233!important;
}
.van-dropdown-menu__bar{
  margin-left:10px!important;
  background-color: transparent!important;
  box-shadow: unset !important
    
}
.van-overlay{
  background-color: rgba(0,0,0,.4)!important;
}
.van-swipe__indicators{
  bottom:0!important;
}
.van-number-keyboard{
  position: relative!important;
}
@media screen and (min-width:768px) {
  .van-key:not(.van-key--large){
    height:30px!important;
    font-size:12px!important;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-warp {
  .add-head{
    display: flex;
    align-items: center;
    margin-bottom:10px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .box-head {
    ul.box-headBtn {
      display: flex;
      padding:0 15px;
      li {
        display: flex;
        align-items: center;
        justify-content:center;
        flex:0 0 23%;
        height: 30px;
        margin:0 3px;
        border:1px solid rgba(0,0,0,.2);
        border-radius:3px;
        font-size:12px;
        color:#777777;
        box-sizing:border-box;
        
      }
    }
  }
  .add-swipe{
    padding:10px 0 30px;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        flex:0 0 20%;
        margin-top:20px;
        font-size:14px;
        text-align:center;
        i{
          display: block;
          height:40px;
          width:40px;
          margin:0 auto 10px;
          line-height:40px;
          color:#999;
          font-size:30px;
        }
        &.active{
          i{
            background-color:#ffbe5e;
            border-radius:50%;
            color:#fff;
          }
        }
        
      }
    }
  }
  .money-keyboard{
    position: absolute;
    bottom:0;
    width:100%;
  }
}
.accountList{
  .title{
    height: 40px;
    line-height: 40px;
    padding:0 10px;
    font-size:18px;
    color:#66bee7;
    border-bottom: 2px solid #66bee7;
  }
  ul{
    
    li{
      font-size:14px;
      // margin:15px 0;
      p{
        padding:0 10px;
        // margin-top:8px;
      }
      .van-icon{
        display:none; 
        font-size: 18px; 
        line-height: inherit;
        color:#66bee7;
      }
      &.active{
        .van-icon{
          display: block!important;
        }
      }
    }
  }
}
 
</style>
