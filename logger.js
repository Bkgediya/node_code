const logger = (req,res,next) => {
  const method = req.method;
  const url  = req.url
  const time = new Date().getFullYear();
  console.log(method,url,time);
  // res.send('Hey') // this will print hey instead of home page 
  next() // use to go app.get from where it call
}

module.exports = logger