module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 37.5,
            propList: ["*"],
            //selectorBlackList:[""]//忽略的选择器 
          })
        ]
      }
    }
  },
  devServer: {
    host: '127.0.0.1',
    // proxy:{
    //   '/':{
    //     target:'http://localhost:3001',
    //   }
    // }
  },
  publicPath:'./',

};