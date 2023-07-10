console.log(__dirname)
console.log(__filename)

const { john , peter } = require('./names')
const sayHi = require('./utils')
const data = require('./alternative')

// behind the module if we want to do something we can do like this 
require('./mind-grande') 

sayHi(john)
sayHi(peter)
console.log(data);