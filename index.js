/**
 * Dependencies
 */

var split = require('split-object')
var bool  = require('booly')

/**
 * Convert the property values in `obj` to booleans.
 *
 * @param  {object} obj
 * @return {object}
 *
 * @api public
 */

function booleanObject(obj) {
  var results = split(obj)
    .map(function(item) {
      item.value = bool(item.value)
      return item
    })
  return split.join(results)
}

/**
 * Exports
 */

module.exports = booleanObject
