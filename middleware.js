const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res

// use is functionally to add middleware instead of adding it in all get method add it in use
app.use([logger,authorize])
// app.use('/api',logger) this apply to all the url that has api ex. api/products , api/items

app.get('/',(req,res) => {
  res.status(200).send('<h1>Home Page</h>')
  // res.json([{name:'hello'}, {name:'how are you'}])
})

app.get('/about',(req,res) => {
  res.status(200).send('about Page')
})

app.listen(5000, () => {
  console.log('server is started');
})