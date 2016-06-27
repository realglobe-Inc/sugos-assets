/**
 * @module FurHelper
 * @see https://github.com/fur-repo/fur
 */
'use strict'

const execcli = require('execcli')

/** @lends FurHelper */
module.exports = Object.assign(exports, {
  /**
   * Execute fur
   */
  fur (...args) {
    return execcli('fur', args, {
      notfound: 'try npm install -g fur'
    })
  },

  /**
   * Generate favicon
   * @returns {Promise}
   */
  favicon (filename, config) {
    let { fur } = exports
    return fur('favicon', filename, config)
  },

  /**
   * Generate banner
   * @returns {Promise}
   */
  banner (filename, config) {
    let { fur } = exports
    return fur('banner', filename, config)
  }
})

