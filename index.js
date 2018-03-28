module.exports = generatePassword

const adjectives = require('adjectives')
const animals = require('animals')
const randomNumber = require('random-number-in-range')

function generatePassword () {
  return [randomAdjective(), animals(), randomNumber(10, 100)].join('-')
}

function randomAdjective () {
  return adjectives[randomNumber(0, adjectives.length - 1)]
}
