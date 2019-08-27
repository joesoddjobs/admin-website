const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#1B1464',
            '@link-color': '#1B1464',
            '@border-radius-base': '5px'
          },
          javascriptEnabled: true
        }
      }
    }
  ],
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }] // `style: true` for less
    ]
  }
}
