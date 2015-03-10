var split = require('split-object')
var bool  = require('booly')

function booleanObject(obj) {
  var results = split(obj)
    .map(function(item) {
      item.value = bool(item.value)
      return item
    })
  return split.join(results)
}

module.exports = booleanObject
