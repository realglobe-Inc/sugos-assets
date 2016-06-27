/**
 * Helper of fs
 * @module FsHelper
 */
'use strict'

const mkdirp = require('mkdirp')

/** @lends FsHelper */
module.exports = Object.assign(exports, {
  mkdirpAsync (dirname) {
    return new Promise((resolve, reject) =>
      mkdirp(dirname, (err) =>
        err ? reject(err) : resolve()
      )
    )
  }
})
