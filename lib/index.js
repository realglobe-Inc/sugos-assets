/**
 * Asset file generator
 * @module sugos-assets
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get banner () { return d(require('./banner')) },
  get favicon () { return d(require('./favicon')) },
  get paths () { return d(require('./paths')) }
}
