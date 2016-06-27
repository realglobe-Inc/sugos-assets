/**
 * Generate favicon
 * @function favicon
 * @param {string} type - Favicon type
 * @param {string} filename - File name to generate
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const path = require('path')
const fsHelper = require('./helpers/fs_helper')
const furHelper = require('./helpers/fur_helper')

const { SUGOS_COLOR } = require('./constants/color_constants')
const { SUGOS_FONT } = require('./constants/font_constants')

/** @lends favicon */
function favicon (type, filename, config = {}) {
  let preset = favicon[ type ]
  if (!preset) {
    throw new Error(`Unknown type: ${type}`)
  }
  return co(function * () {
    yield fsHelper.mkdirpAsync(path.dirname(filename))
    yield furHelper.favicon(filename, preset(config))
  })
}

Object.assign(favicon, {
  /**
   * Favicon settings for sugos
   */
  sugos () {
    return {
      text: 'S',
      shape: 'b',
      font: SUGOS_FONT,
      color: SUGOS_COLOR,
      size: 128,
      fontSize: 64
    }
  },

  /**
   * Favicon settings for example
   */
  example (config) {
    let { name, color } = config
    return {
      text: name.split(/\-/g).map((name) => name[ 0 ]).join('').toUpperCase(),
      size: 128,
      shape: 'g',
      font: 'ah',
      fontSize: 68,
      color
    }
  }
})

module.exports = favicon
