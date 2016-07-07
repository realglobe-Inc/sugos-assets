/**
 * Test case for install.
 * Runs with mocha.
 */
'use strict'

const install = require('../lib/install.js')
const assert = require('assert')
const co = require('co')

describe('install', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Install', () => co(function * () {
    yield install(
      `${__dirname}/../tmp/foo/bar`,
      {

      }
    )
  }))
})

/* global describe, before, after, it */
