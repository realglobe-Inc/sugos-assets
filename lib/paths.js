
'use strict'

const { join, resolve } = require('path')
let image = (filename) => join(resolve(__dirname, '../assets/images'), filename)

/** Image paths */
exports.images = {
  nodejsBanner: image('nodejs-banner.png'),
  npmBanner: image('npm-banner.png'),
  sugoCloudBanner: image('sugo-cloud-banner.png'),
  sugoObserverBanner: image('sugo-observer-banner.png'),
  sugoSpotBanner: image('sugo-spot-banner.png'),
  sugoTerminalBanner: image('sugo-terminal-banner.png'),
  sugosBanner: image('sugos-banner.png'),
  sugosFavicon: image('sugos-favicon.png'),
  sugosStructure: image('sugos-structure.png')
}
