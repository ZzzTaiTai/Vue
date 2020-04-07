module.exports = {
lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 16,
            propList: ["*"],
            selectorBlackList:["el-"]//忽略的选择器 
          })
        ]
      }
    }
  }
};
