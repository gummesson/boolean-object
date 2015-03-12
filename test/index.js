/**
 * Dependencies
 */

var test          = require('tape')
var booleanObject = require('../')

/**
 * Tests
 */

test('booleanObject(obj)', function(assert) {
  var actual   = booleanObject({ foo: 'true', bar: 'false', baz: 1, qux: 0, str: 'string' })
  var expected = { foo: true, bar: false, baz: true, qux: false, str: 'string' }
  assert.deepEqual(actual, expected, 'converts values to booleans')
  assert.end()
})
