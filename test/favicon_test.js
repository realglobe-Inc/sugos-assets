/**
 * Test case for favicon.
 * Runs with mocha.
 */
'use strict'

const favicon = require('../lib/favicon.js')
const assert = require('assert')
const co = require('co')

describe('favicon', function () {
  this.timeout(3000)

  before(() => co(function * () {
    
  }))

  after(() => co(function * () {

  }))

  it('Favicon', () => co(function * () {
    yield favicon('example',
      `${__dirname}/../tmp/testing-example-favicon.svg`,
      {
        name: 'hoge-hoge-hoge',
        color: '#38A'
      }
    )
  }))
})

/* global describe, before, after, it */
