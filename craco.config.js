const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#7773b2'
              // '@border-radius-base': '30px'
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
