const withSass = require('@zeit/next-sass')
module.exports = withSass()

module.export = {
  exportPathMap: function() {
    return {
      '/': {page: '/'},
      '/home': {page: '/home'},
      '/about': {page: '/about'}
    }
  }
}