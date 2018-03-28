const test = require('tap').test

const generatePassword = require('../index')

test('smoke test', function (t) {
  const string = generatePassword()
  t.is(typeof string, 'string')
  t.end()
})
