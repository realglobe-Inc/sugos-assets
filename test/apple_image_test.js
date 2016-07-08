/**
 * Test case for appleImage.
 * Runs with mocha.
 */
'use strict'

const appleImage = require('../lib/apple_image.js')
const assert = require('assert')
const co = require('co')

describe('apple-image', function () {
  this.timeout(6000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Generate background', () => co(function * () {
    yield appleImage('background',
      `${__dirname}/../tmp/testing-apple-background.png`,
      {
        name: 'hoge-hoge-hoge',
        color: '#3A8'
      }
    )
  }))
})

/* global describe, before, after, it */
