/**
 * Asset file generator
 * @module sugos-assets
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get favicon () { return d(require('./favicon')) }
}
