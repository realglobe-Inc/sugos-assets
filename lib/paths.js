
'use strict'

const { join, resolve } = require('path')
let image = (filename) => join(resolve(__dirname, '../assets/images'), filename)

/** Image paths */
exports.images = {
  macBanner: image('mac-banner.svg'),
  nodejsBanner: image('nodejs-banner.png'),
  npmBanner: image('npm-banner.png'),
  sugoActorBanner: image('sugo-actor-banner.png'),
  sugoCallerBanner: image('sugo-caller-banner.png'),
  sugoCloudBanner: image('sugo-cloud-banner.png'),
  sugoObserverBanner: image('sugo-observer-banner.png'),
  sugosBanner: image('sugos-banner.png'),
  sugosFavicon: image('sugos-favicon.png'),
  sugosOverview: image('sugos-overview.jpeg'),
  sugosStructure: image('sugos-structure.png')
}
