const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name,id) => {
  console.log(`Data Received with name ${name} and ${id}`);
})

customEmitter.on('response', () => {
  console.log('Some other logic here');
})

customEmitter.emit('response','john',34)
