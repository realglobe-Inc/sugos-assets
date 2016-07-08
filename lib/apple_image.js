/**
 * Generate images for apple
 * @function appleImage
 * @param {string} type - Image type
 * @param {string} filename - File name to generate
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const path = require('path')
const { mkdirpAsync } = require('asfs')
const furHelper = require('./helpers/fur_helper')

const { SUGOS_COLOR } = require('./constants/color_constants')
const { SUGOS_FONT } = require('./constants/font_constants')

/** @lends appleImage */
function appleImage (type, filename, config = {}) {
  let preset = appleImage[ type ]
  if (!preset) {
    throw new Error(`Unknown type: ${type}`)
  }
  return co(function * () {
    yield mkdirpAsync(path.dirname(filename))

    let preset_ = preset(config)
    let { method } = preset_
    delete preset_.method
    yield furHelper[ method ](filename, preset_)
  })
}

Object.assign(appleImage, {
  /**
   * Image settings for background
   */
  background (config) {
    let { name, color } = config
    return {
      text: name,
      width: 756,
      height: 756,
      shape: 'a',
      font: 'ah',
      fontSize: 64,
      color,
      method: 'banner'
    }
  },
  /**
   * Image settings for icon
   */
  icon (config) {
    let { name, color } = config
    return {
      text: name.split(/\-/g).map((name) => name[ 0 ]).join('').toUpperCase(),
      size: 1024, // Large image so that it cloud be converted into ICNS format
      shape: 'h',
      font: 'ah',
      fontSize: 420,
      color,
      method: 'favicon'
    }
  }
})

module.exports = appleImage
