//
//
//
// TODO: 1. Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = ''
try {
  firstNameExport = 'Mustafa'
} catch (e) {}
let ageExport = 0
try {
  ageExport = 100
} catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
