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

  it('Generate sugos favicon', () => co(function * () {
    yield favicon('sugos',
      `${__dirname}/../tmp/testing-sugos-favicon.svg`
    )
  }))

  it('Generate example favicon', () => co(function * () {
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
