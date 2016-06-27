#!/usr/bin/env node

/**
 * Generate asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const co = require('co')
const { banner, favicon } = require('../lib')

const assetDir = `${__dirname}/../assets`

apeTasking.runTasks('asset', [
  () => co(function * () {
    let banners = {
      'images/sugos-banner.png': [ 'sugos', {} ],
      'images/sugo-cloud-banner.png': [ 'module', { name: 'SUGO-Cloud' } ],
      'images/sugo-spot-banner.png': [ 'module', { name: 'SUGO-Spot' } ],
      'images/sugo-terminal-banner.png': [ 'module', { name: 'SUGO-Terminal' } ],
      'images/sugo-observer-banner.png': [ 'module', { name: 'SUGO-Obeserver' } ]
    }
    for (let filename of Object.keys(banners)) {
      let [type, config] = banners[ filename ]
      yield banner(type, `${assetDir}/${filename}`, config)
    }
  }),
  () => co(function * () {
    let favicons = {
      'images/sugos-favicon.png': [ 'sugos', {} ]
    }
    for (let filename of Object.keys(favicons)) {
      let [type, config] = favicons[ filename ]
      yield favicon(type, `${assetDir}/${filename}`, config)
    }
  })
], true)
