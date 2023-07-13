const express = require('express')
const app = express()
const { products } = require('./data')
//app.get
//app.put
//app.post
//app.delete
//app.all
//app.use

// set static and middleware
// app.use(express.static('./public'))

app.get('/', (req,res) => {
  res.status(200).send('<h1>Home Page</h>  <a href = "/api/products"> products </a>')
  // res.json([{name:'hello'}, {name:'how are you'}])
})


app.get('/api/products', (req,res) => {
  res.status(200).json(products)
  // res.json([{name:'hello'}, {name:'how are you'}])
})

// route params
app.get('/api/products/:productId', (req,res) => {  
  const { productId} = req.params; // return as string
  const singleProduct =  products.find((product) => product.id === Number(productId))
  if (!singleProduct) {
    return   res.status(404).send('Product does not exists')
  }
  return res.status(200).json(singleProduct)
  // res.json([{name:'hello'}, {name:'how are you'}])
})

app.get('/about', (req,res) => {
  res.status(200).send('about Page')
})

app.all('*', (req,res) => { 
  res.status(404).send('<h1>Resource not found</h>')
})

//query parameters                       
app.get('api/v1/query',(req,res) => {
  console.log(req.query);
})
app.listen(5000, () => {
  console.log('server is started');
})