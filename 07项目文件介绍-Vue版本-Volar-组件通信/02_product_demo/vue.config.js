const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {//需要配置webpack就配置configureWebpack

    resolve: {
    // 配置路径别名
    // @是已经配置好的路径别名 对应的是src路径
      alias: {
        "utils": "@/utils"
      }
    }
  }
})
