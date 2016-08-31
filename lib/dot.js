/**
 * Generate dot image
 * @function dot
 */
'use strict'

const dotpic = require('dotpic')
const path = require('path')
const { EOL } = require('os')
const co = require('co')
const writeout = require('writeout')
const { SUGOS_COLOR } = require('./constants/color_constants')

/** @lends dot */
function dot (filename, data, options) {
  let svg = dotpic(data, options)
  return co(function * () {
    let { skipped } = yield writeout(filename, svg, {
      skipIfIdentical: true,
      mkdirp: true
    })
    if (!skipped) {
      console.log('File generated', filename)
    }
  })
}

Object.assign(dot, {
  sugos: {
    data: [ `
11111111
11111111
11000000
11111111
11111111
00000011
11111111
11111111
`, `
11000011
11000011
11000011
11000011
11000011
11000011
11111111
11111111
`, `
11111111
11111111
11000000
11001111
11001111
11000011
11111111
11111111
`, `
11111111
11111111
11000011
11000011
11000011
11000011
11111111
11111111
`, `
11111111
11111111
11000000
11111111
11111111
00000011
11111111
11111111
`
    ]
      .map((letter) => [ '00000000', letter.trim(), '00000000' ].join(EOL).trim())
      .reduce((letters, letter) =>
        letter.split(EOL).map((line, i) =>
          [].concat(letters[ i ], line).filter(Boolean).join('0')
        ), [])
      .map((line) => `0${line}0`)
      .join(EOL),
    options: {
      width: 512,
      height: 128,
      colors: {
        '0': SUGOS_COLOR,
        '1': 'white'
      }
    }
  }
})

module.exports = dot
