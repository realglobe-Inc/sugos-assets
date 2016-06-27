/**
 * Test case for banner.
 * Runs with mocha.
 */
'use strict'

const banner = require('../lib/banner.js')
const assert = require('assert')
const co = require('co')

describe('banner', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Generate sugos banner', () => co(function * () {
    yield banner(
      'sugos',
      `${__dirname}/../tmp/testing-sugos-banner.svg`
    )
  }))

  it('Generate plugin banner', () => co(function * () {
    yield banner(
      'plugin',
      `${__dirname}/../tmp/testing-sugos-plugin.svg`,
      {
        name: 'sg-mw-compile'
      }
    )
  }))
})

/* global describe, before, after, it */
