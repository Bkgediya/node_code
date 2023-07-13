
const http = require('http');

const server = http.createServer((req,res) => {

  const url = req.url;

  if (url === '/') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1> Home Page </h1>')
    res.end()
  }
  //about page info
  else if (url === '/about') {
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1> about Page </h1>')
    res.end()
  }
  // 404 resource not found
  else {
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1> Page not found. </h1>')
    res.end()
  }

 
  // if (req.url === '/') {
  //   res.end('Welcome to our home page')
  // }

  // if (req.url === '/about') {
  //   res.end('here is history')
  // }  

  // res.end(`
  //   <h1> Not found!! </h1> 
  // `)
})

// server with event api

// const server1 = http.createServer()

// server1.on('request',(req,res) => {
//   res.end('Welcome')
// })

server.listen(5000)