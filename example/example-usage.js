'use strict'

const sugosAssets = require('sugos-assets')
const co = require('co')

co(function * () {
  // Generate favicon for an example project
  {
    const type = 'example'
    const filename = 'doc/images/my-example-01-favicon.svg'
    yield sugosAssets.favicon(type, filename, {
      // Render config
      name: 'my-example-01',
      color: '#38A'
    })
  }
}).catch((err) => console.error(err))
