const path = require('path')

var servicesPath = process.env.VUE_APP_APICLIENT == 'server' ? '' : '/mock';

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                "&services" : `../services${servicesPath}`,
            }
        }
    }
}