// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' }
      },
    }
  }
}
