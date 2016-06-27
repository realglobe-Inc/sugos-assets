/**
 * Test case for paths.
 * Runs with mocha.
 */
'use strict'

const paths = require('../lib/paths.js')
const assert = require('assert')
const co = require('co')
const fs = require('fs')

describe('paths', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Paths', () => co(function * () {
    for (let name of Object.keys(paths.images)) {
      assert.ok(
        fs.existsSync(paths.images[ name ])
      )
    }
  }))
})

/* global describe, before, after, it */
