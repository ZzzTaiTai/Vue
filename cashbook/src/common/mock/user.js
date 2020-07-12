import Mock from 'mockjs'
import { rangedate } from '../js/util'
let userInfo = [
    {id:1,username: 'admin',password: '123456',token:'2020060140101'}
    // {id:2,username: 'user',password: '123123'}
]
Mock.mock('/data/getData','get',{ //输出数据
       "data|60":[
        {
          // 属性 id 是一个自增数，起始值为 3，每次增 1
        'id|+1': 1,
        'name|1':["余额宝","付款给我的朋友","一个朋友向你转账","某人向你转账","京东购物海尔洗衣机","购买了一台电脑","购买了一台手机"],
        "time": rangedate('2020-01-01','2020-03-01'),
        "money|-5000-5000":1,
        "iconNum|1-8": 1,
        "typeName|1": ["其他","购物","一般"],
        "account|1": [
          {
            name: "中国建设银行",
            bankType:"CCB",
            isBank: true,
            info: "信用卡",
            bankNum: "2555"
          },
          {
            name: "中国银行",
            bankType:"BOC",
            isBank: true,
            info: "信用卡",
            bankNum: "7222"
          },
          {
            name: "中国工商银行",
            bankType:"ICBC",
            isBank: true,
            info: "储蓄卡",
            bankNum: "2541"
          },
          {
            name: "余额",
            bankType:"YE",
            isBank: false,
            info: "",
            bankNum: ""
          }, 
          {
            name: "花呗",
            bankType:"HB",
            isBank: false,
            info: "",
            bankNum: ""
          },
        ],
        'userId':1,
       }
       ]
});
Mock.mock('/user/login', 'post', (req) => {
  // eslint-disable-next-line standard/object-curly-even-spacing
  const { username,password} = JSON.parse(req.body)
  if (username === 'admin' && password === '123456') {
    return {
      success: true,
      token:userInfo[0].token
    }
  } else {
    return {
      success: false
    }
  }
});
  