/* eslint-disable object-property-newline */
/* global describe it */

var assert = require('assert')
var interval = require('..')

function split (a) { return Array.isArray(a) ? a : a.split(' ') }
function map (fn) {
  return function (str) { return split(str).map(fn) }
}

describe('interval notation', function () {
  describe('parse', function () {
    var parse = interval.parse
    var intervals = map(interval.parse)
    it('parses tonal shorthand notation', function () {
      assert.deepEqual(parse('3M'), { num: 3, q: 'M', dir: 1,
        simple: 3, type: 'M', alt: 0, oct: 0, size: 4 })
      assert.deepEqual(parse('-9m'), { num: 9, q: 'm', dir: -1,
        simple: 2, type: 'M', alt: -1, oct: 1, size: -13 })
    })
    it('parses tonal strict notation', function () {
      assert.deepEqual(intervals('1P 2M 3M 4P 5P 6M 7M'),
        intervals('P1 M2 M3 P4 P5 M6 M7'))
    })
    it('strictoption', function () {
      assert.equal(parse('blah'), null)
      assert.equal(parse('blah', false), null)
      assert.equal(parse('P2'), null)
      assert.deepEqual(parse('P2', false), { num: 2, q: 'P', dir: 1,
        simple: 2, type: 'M', alt: null, oct: 0, size: 2 })
    })
  })
  describe('qToAlt', function () {
    it('get alteration of majorables intervals', function () {
      var maj = map(function (a) { return interval.qToAlt('M', a) })
      assert.deepEqual(maj('dddd ddd dd d m M A AA AAA AAAA'),
        [ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ])
    })
    it('get alteration of perfetables intervals', function () {
      var per = map(function (a) { return interval.qToAlt('P', a) })
      assert.deepEqual(per('dddd ddd dd d P A AA AAA AAAA'),
        [ -4, -3, -2, -1, 0, 1, 2, 3, 4 ])
    })
    it('accepts interval numbers', function () {
      assert.equal(interval.qToAlt(2, 'd'), -2)
    })
  })

  describe('shorthand', function () {
    var str = interval.shorthand
    it('get interval string', function () {
      assert.equal(str(1, 0, 1, 1), 'P8')
      assert.equal(str(1, 1, 1, 1), 'A8')
      assert.equal(str(1, 0, 1, -1), 'P-8')
      assert.equal(str(1, 1, 1, -1), 'A-8')
    })
  })

  describe('build', function () {
    var str = interval.build
    it('get interval string', function () {
      assert.equal(str(1, 0, 1, 1), '8P')
      assert.equal(str(1, 1, 1, 1), '8A')
      assert.equal(str(1, 0, 1, -1), '-8P')
      assert.equal(str(1, 1, 1, -1), '-8A')
      assert.equal(str(7, 0, 0, 1), '7M')
    })
  })

  describe('altToQ', function () {
    it('get quality of majorables intervals', function () {
      var maj = map(function (a) { return interval.altToQ('M', a) })
      assert.deepEqual(maj([ -5, -4, -3, -2, -1, 0, 1, 2, 3, 4 ]),
        [ 'dddd', 'ddd', 'dd', 'd', 'm', 'M', 'A', 'AA', 'AAA', 'AAAA' ])
    })
    it('get quality of perfectables intervals', function () {
      var per = map(function (a) { return interval.altToQ('P', a) })
      assert.deepEqual(per([ -4, -3, -2, -1, 0, 1, 2, 3, 4 ]),
        [ 'dddd', 'ddd', 'dd', 'd', 'P', 'A', 'AA', 'AAA', 'AAAA' ])
    })
  })
})
