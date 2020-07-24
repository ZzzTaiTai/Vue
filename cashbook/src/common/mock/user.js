import Mock, {Random} from 'mockjs'
import { rangedate } from '../js/util'
let userInfo = [
    {id:1,username: 'admin',password: '123456',token:''}
]

//mock的Random继承随机生成区间时间
//因直接在mock调用只生成同一天的数据
Random.extend({
  randomDate:rangedate
})
let dataList = {'data':[]};
if(sessionStorage.getItem('data')){
  dataList = JSON.parse(sessionStorage.getItem('data'));
}

Mock.mock('/data/getData','get',() =>{
  if(dataList.data.length === 0 ){
    let mockdata = {
      // 属性 id 是一个自增数，起始值为 3，每次增 1
    'id|+1': 1,
    'name|1':["余额宝","付款给我的朋友","一个朋友向你转账","某人向你转账","京东购物海尔洗衣机","购买了一台电脑","购买了一台手机"],
    "time":'@randomDate("2020-05-01","2020-12-31")',
    "money|-5000-5000":1,
    "iconNum|1-8": 1,
    "typeName|1": ["其他","购物","一般"],
    "account|1": [
      {
        cardId:0,
        name: "中国建设银行",
        bankType:"CCB",
        isBank: true,
        info: "信用卡",
        bankNum: "2555"
      },
      {
        cardId:1,
        name: "中国银行",
        bankType:"BOC",
        isBank: true,
        info: "信用卡",
        bankNum: "7222"
      },
      {
        cardId:2,
        name: "中国工商银行",
        bankType:"ICBC",
        isBank: true,
        info: "储蓄卡",
        bankNum: "2541"
      },
      {
        cardId:3,
        name: "余额",
        bankType:"YE",
        isBank: false,
        info: "",
        bankNum: ""
      }, 
      {
        cardId:4,
        name: "花呗",
        bankType:"HB",
        isBank: false,
        info: "",
        bankNum: ""
      },
    ],
    'userId':1,
   }
    for(let i =0;i<500;i++){
      let list = Mock.mock(mockdata);
      dataList.data.push(list);
    }
    sessionStorage.setItem('data',JSON.stringify(dataList));
  }else{
    dataList = JSON.parse(sessionStorage.getItem('data'));
  }
  return dataList
  
});
Mock.mock('/data/dataLists','post',(req) =>{
  const { id } = JSON.parse(req.body);
  const curData = dataList.data.find(element => element.id === id);
  return curData;
}) 
Mock.mock('/user/login', 'post', (req) => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  const { username,password} = JSON.parse(req.body)
  if (username === 'admin' && password === '123456') {
    return {
      success: true,
      token:Random.word(10),
      userId:1
    }
  } else {
    return {
      success: false
    }
  }
});
Mock.mock('/user/regist', 'post', (req) => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  const { username,password,configPaw } = JSON.parse(req.body)
  console,log(username,password,configPaw)
});
  