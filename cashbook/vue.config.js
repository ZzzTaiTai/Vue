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
  }
};
