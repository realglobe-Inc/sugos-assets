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
const { darken } = require('acolor')

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
      .map((letter) => [ '11111111', '00000000', letter.trim(), '00000000', '11111111' ].join(EOL).trim())
      .reduce((letters, letter) =>
        letter.split(EOL).map((line, row, { length }) =>
          [].concat(letters[ row ], line).filter(Boolean).join((row === 0) || (row === length - 1) ? '1' : '0')
        ), [])
      .map((line, row, { length }) => (row === 0) || (row === length - 1) ? `11${line}11` : `10${line}01`)
      .map((line, row) =>
        line.split('').map((dot, col) => {
          let highlight = (row % 2) !== (col % 2)
          return highlight ? String(Number(dot) + 2) : dot
        }).join('')
      )
      .join(EOL),
    options: {
      width: 1024,
      height: 256,
      background: darken(SUGOS_COLOR, 0.8),
      colors: {
        '3': SUGOS_COLOR,
        '2': 'transparent',
        '1': darken(SUGOS_COLOR, 0.05),
        '0': 'transparent'
      }
    }
  }
})

module.exports = dot
