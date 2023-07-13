const { readFile, writeFile, write } = require('fs');
// const { readFile, writeFile, write } = require('fs').promises; // this will return promises so no need to promisify with util library
const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const getText = (path) => {
  return new Promise((resolve,reject) => {
    readFile(path,'utf-8',(err,result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    });
  })
}

// getText('').then((result) => console.log(result));

const start = async () => {
  try {
    const first = await getText('./content/first.txt')
    const second = await getText('./content/second.txt')
    console.log(first,second);
    // with promisify approach
    // const first = await readFilePromise('./content/first.txt','utf-8')
    // const second = await readFilePromise('./content/second.txt','utf-8')
    // await writeFilePromise('./content/result.txt',`This is awesome: `)

    // with .promises approach
    // const first = await readFile('./content/first.txt','utf-8')
    // const second = await readFile('./content/second.txt','utf-8')
    // await writeFile('./content/result.txt',`This is awesome: `)
  }catch (error) {
    console.log(err)
  }
}

start()


// readFile('./content/first.txt','utf-8',(err,result) => {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   const first = result
//   readFile('./content/second.txt','utf-8',(err,result) => {
//     if (err) {
//       console.log(err)
//       return;
//     }
//     const second = result
//     writeFile('./content/fs-async.txt',`The Result is ${first}, ${second}`,(err,result) => {
//       if (err) {
//         console.log(err)
//         return;
//       }
//       console.log(result);
//     })
//   })
// })