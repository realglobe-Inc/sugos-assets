/**
 * Asset file generator
 * @module sugos-assets
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get appleImage () { return d(require('./apple_image')) },
  get banner () { return d(require('./banner')) },
  get favicon () { return d(require('./favicon')) },
  get install () { return d(require('./install')) },
  get paths () { return d(require('./paths')) }
}
