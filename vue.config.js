module.exports = {
  devServer: {
    open: true,
    proxy: {
      '^/v1': {
        target: 'https://elm.cangdu.org/v1',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      },
      '^/v2': {
        target: 'https://elm.cangdu.org/v2',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      }
    }
  },
  productionSourceMap: false
}
