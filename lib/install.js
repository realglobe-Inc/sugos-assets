/**
 * Install assets
 * @function install
 * @param {string} dirname - Directory name to install files
 * @param {Object} [options]
 * @returns {Promise}
 */
'use strict'

const co = require('co')
const path = require('path')
const filelink = require('filelink')
const aglob = require('aglob')

const assetDir = `${__dirname}/../assets`

let linkFilesInDir = (srcDir, destDir) => co(function * () {
  let filenames = yield aglob('*.*', { cwd: srcDir })
  for (let filename of filenames) {
    let src = `${srcDir}/${filename}`
    let dest = `${destDir}/${filename}`
    yield filelink(src, dest, {
      force: true,
      mkdirp: true
    })
    console.log(`File installed: ${path.relative(process.cwd(), dest)}`)
  }
})

/** @lends install */
function install (dirname, options = {}) {
  return co(function * () {
    yield linkFilesInDir(`${assetDir}/css`, `${dirname}/css`)
    yield linkFilesInDir(`${assetDir}/fonts`, `${dirname}/fonts`)
    yield linkFilesInDir(`${assetDir}/images`, `${dirname}/images`)
  })
}

module.exports = install
