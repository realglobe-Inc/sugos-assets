/**
 * Generate banner
 * @function banner
 * @param {string} type - Favicon type
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

/** @lends banner */
function banner (type, filename, config = {}) {
  let preset = banner[ type ]
  if (!preset) {
    throw new Error(`Unknown type: ${type}`)
  }
  return co(function * () {
    yield mkdirpAsync(path.dirname(filename))
    yield furHelper.banner(filename, preset(config))
  })
}

Object.assign(banner, {
  /**
   * Banner settings for sugos
   * @returns {Object}
   */
  sugos () {
    return {
      text: 'SUGOS',
      shape: 'a',
      font: SUGOS_FONT,
      color: SUGOS_COLOR,
      fontSize: 192,
      width: 316 * 2,
      height: 128 * 2
    }
  },

  /**
   * Banner settings for core libraries
   * @param {Object} config
   * @returns {Object}
   */
  core (config) {
    let { name } = config
    return {
      text: name,
      shape: 'c',
      font: SUGOS_FONT,
      color: SUGOS_COLOR,
      fontSize: 192 / 2,
      width: 316 * 2.2,
      height: 128 * 2
    }
  },

  /**
   * Banner settings for plugins
   * @param {Object} config
   * @returns {Object}
   */
  plugin (config) {
    let { name } = config
    return {
      text: name,
      shape: 'f',
      font: SUGOS_FONT,
      color: SUGOS_COLOR,
      fontSize: 192 / 2,
      width: 316 * 3,
      height: 128 * 2
    }
  }
})

module.exports = banner
