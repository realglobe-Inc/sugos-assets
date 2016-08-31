#!/usr/bin/env node

/**
 * Generate asset files
 */
'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const co = require('co')
const { banner, favicon, dot } = require('../lib')
const svgpng = require('svgpng')

const assetDir = `${__dirname}/../assets`

apeTasking.runTasks('asset', [
  () => co(function * () {
    let dots = {
      'images/sugos-dot.svg': dot.sugos
    }
    for (let filename of Object.keys(dots)) {
      let { data, options } = dots[ filename ]
      let svgFile = `${assetDir}/${filename}`
      yield dot(svgFile, data, options)
      let pngFile = svgFile.replace(/svg$/, 'png')
      yield svgpng(svgFile, pngFile)
    }
  }),
  () => co(function * () {
    let banners = {
      'images/sugos-banner.png': [ 'sugos', {} ],
      'images/sugo-hub-banner.png': [ 'core', { name: 'SUGO-Hub' } ],
      'images/sugo-caller-banner.png': [ 'core', { name: 'SUGO-Caller' } ],
      'images/sugo-actor-banner.png': [ 'core', { name: 'SUGO-Actor' } ],
      'images/sugo-observer-banner.png': [ 'core', { name: 'SUGO-Observer' } ]
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
