<template>
  <div class="add-cash">
    <div class="add-warp">
      <van-popup v-model="isShow" position="bottom" :style="{ height: '100vh',width:'100vw'}">
        <div class="add-head" >
          <van-icon name="arrow-left" size="28" @click="commitShow()" />
          <van-dropdown-menu>
            <van-dropdown-item v-model="curOption" :options="option" />
          </van-dropdown-menu>
        </div>
        <div class="box-head">
          <ul class="box-headBtn">
            <li @click="isDate = !isDate">{{currentDate | pickerFormat}}</li>
            <li v-if="!info" @click="isInfo = !isInfo">备注</li>
            <li @click="isAccount = !isAccount" :class="{'not':accountIndex}">{{selectedAct}}</li>
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
            <van-popup v-model="isInfo" :style="{ width:'80%' }">备注待处理</van-popup>
            <div class="accountList">
              <van-popup v-model="isAccount" :style="{ width:'80%' }">
                <div class="title">
                  <h1>选择账户</h1>
                </div>
                <ul>
                  <li
                    v-for="(item,actIndex) in accountList"
                    :key="item.cardId"
                    :class="{'active':actIndex == accountIndex}"
                    @click="selectAct(actIndex)"
                  >
                    <van-cell clickable center>
                      <p>
                        {{item.name}}{{item.info}}
                        <span v-if="item.bankNum">尾号{{item.bankNum}}</span>
                      </p>
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
        <div class="swipe-box" >
          <van-swipe class="add-swipe" :autoplay="0" indicator-color="#888888">
            <div v-for="(item,indexNum) in iconMap" :key="indexNum">
              <van-swipe-item v-if="indexNum%10==0">
                <ul>
                  <li
                    v-for="(curItem,index) in iconMap.slice(indexNum, indexNum+10)"
                    :key="index"
                    :class="{'active':indexActive === curItem.className}"
                    @click="changeActive(index,curItem.className)"
                  >
                    <i class="iconfont" :class="'icon-' + curItem.className"></i>
                    {{curItem.name}}
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
              clear-trigger="always"
              @focus="inputNone"
            />
          </van-cell-group>
          <van-number-keyboard
            :show="isShow"
            :maxlength="8"
            v-model="curMoneny"
            theme="custom"
            extra-key="."
            close-button-text="完成"
            @close="done()"
            
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
      accountList: [
        {
          cardId: 0,
          name: "中国建设银行",
          bankType: "CCB",
          isBank: true,
          info: "信用卡",
          bankNum: "2555"
        },
        {
          cardId: 1,
          name: "中国银行",
          bankType: "BOC",
          isBank: true,
          info: "信用卡",
          bankNum: "7222"
        },
        {
          cardId: 2,
          name: "中国工商银行",
          bankType: "ICBC",
          isBank: true,
          info: "储蓄卡",
          bankNum: "2541"
        },
        {
          cardId: 3,
          name: "余额",
          bankType: "YE",
          isBank: false,
          info: "",
          bankNum: ""
        },
        {
          cardId: 4,
          name: "花呗",
          bankType: "HB",
          isBank: false,
          info: "",
          bankNum: ""
        }
      ],
      accountIndex: null, //当前账号的index
      curIcon: 0,
      curMoneny: '',//金额
      currentDate: new Date(),//添加日期
      // curAccount: this.accountList || null,//当前选择的账号
      info:null,//备注
      isDate: false, //显示日历框
      isInfo: false,//显示备注组件框
      isAccount: false,//显示账号选择框
      indexActive: "gongzi",
      iconMap:this.$icon.iconMap,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      option: [
        {
          text: "支出",
          value: 0,
          icon: "* iconfont icon-wsmp-expenditure"
        },
        { text: "收入", value: 1, icon: "* iconfont icon-zhichu" }
      ],
      curOption:0
    };
  },
  props: ["isShow","cashData"],
  created() {

      
    // if(this.id){
    //   this.$axios
    //     .post('/data/dataLists',{id:this.id})
    //     .then( res => {
    //       console.log(res)
    //   })
    // }
  },
  watch:{
      cashData(){
        this.accountIndex = this.cashData.account.cardId;
        this.curMoneny = (this.cashData.money).toString();
        this.info = this.cashData.name;
        this.indexActive =this.iconMap[this.cashData.iconNum].className;
        this.curOption = this.cashData.money >= 0 ? 1 : 0
      }
  },
  computed: {
    show() {
      if (typeof(this.isShow) == 'undefined') {
        return true
      }else{
        return this.isShow
      }
    },
    curAccount() {
      if(!this.accountList[this.accountIndex]) return null;
      return this.accountList[this.accountIndex]
    },
    selectedAct() {
      if (!this.curAccount) return "账户";
      if (!this.curAccount.info) return this.curAccount.name;
       return this.curAccount.info + this.curAccount.bankNum;
    },
    
    cashInfo() {
      let newInfo = {
          id: Math.floor(Math.random() * (1000-100) +100 ),
          name: this.noteInfo,
          time: this.$filters.allDateFormat(this.currentDate,'yyyy-MM-dd HH:mm:ss'),
          money: Number(this.newMoney),
          iconNum: this.curIcon,
          typeName: this.iconMap[this.curIcon].name,
          account: this.accountList[this.accountIndex] || {},
          userId:1
      }
      return newInfo;
    },
    newMoney() {
      const curValue = '支出'
      if(this.value === curValue) return '-'+this.curMoneny
      return this.curMoneny
    },
    //备注 当没有备注时使用icon 名称
    noteInfo() {
      if(!this.info) return this.iconMap[this.curIcon].name;
      return this.info;
    }
  },
  methods: {
    commitShow() {
      this.$emit("showAdd");
    },
    changeActive(index,name) {
      this.curIcon = index;
      this.indexActive = name;
    },
    inputNone() {
      document.activeElement.blur();
    },
    selectAct(curNum) {
      this.accountIndex = curNum;
      this.isAccount = !this.isAccount;
    },
    done() {
      this.$emit("showAdd");
      this.$emit('addCash',this.cashInfo);
    }
  }
};
</script>
<style lang="scss">
.van-dropdown-item {
  top: 0 !important;
}
.van-popup--top {
  left: 20px !important;
  top: 50px !important;
  width: 30% !important;
  transform: translate3d(0px, 0px, 0px) !important;
  transition-duration: 0.1s !important;
  overflow: unset !important;
  &::after {
    position: absolute;
    top: -16px;
    left: 20px;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    content: "";
  }
}
.van-dropdown-menu__title {
  &::after {
    top: 100% !important;
    margin: 0 !important;
    -webkit-transform: rotate(-45deg) !important;
    transform: rotate(-45deg) !important;
    border-color: #dcdee0 transparent transparent transparent !important;
  }
}
.van-dropdown-menu__title--active {
  color: #323233 !important;
}
.van-dropdown-menu__bar {
  margin-left: 10px !important;
  background-color: transparent !important;
  box-shadow: unset !important;
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
.van-swipe__indicators {
  bottom: 0 !important;
}
.van-number-keyboard {
  position: relative !important;
}
@media screen and (min-width: 768px) {
  .van-key:not(.van-key--large) {
    height: 30px !important;
    font-size: 12px !important;
  }
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.add-warp {
  .add-head {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .box-head {
    ul.box-headBtn {
      display: flex;
      padding: 0 15px;
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 23%;
        height: 30px;
        margin: 0 3px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        border-radius: 3px;
        font-size: 12px;
        color: #555555;
        box-sizing: border-box;
        &.not{
          border: 1px solid rgba(0, 0, 0, 0.2);
          color: #777777;
          pointer-events: none;
        }
      }
    }
  }
  .add-swipe {
    padding: 10px 0 30px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 0 0 20%;
        margin-top: 20px;
        font-size: 14px;
        text-align: center;
        i {
          display: block;
          height: 40px;
          width: 40px;
          margin: 0 auto 10px;
          line-height: 40px;
          color: #999;
          font-size: 30px;
        }
        &.active {
          i {
            background-color: #ffbe5e;
            border-radius: 50%;
            color: #fff;
          }
        }
      }
    }
  }
  .money-keyboard {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.accountList {
  .title {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    font-size: 18px;
    color: #66bee7;
    border-bottom: 2px solid #66bee7;
  }
  ul {
    li {
      font-size: 14px;
      .van-icon {
        display: none;
        font-size: 18px;
        line-height: inherit;
        color: #66bee7;
      }
      &.active {
        .van-icon {
          display: block !important;
        }
      }
    }
  }
}
</style>
