const { error } = require('console');
const { createReadStream } = require('fs')


// by default buffer size = 64kb
// to increase buffer size createReadStream('./content/first.txt', { highWaterMark: 90000 , encoding : 'utf-8'} )
const stream = createReadStream('./content/first.txt')
stream.on('data', (result) => {
  console.log(result);
})

stream.on('error' , (error) => {
  console.log(error);
})