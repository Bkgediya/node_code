const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
console.log(first,second);

writeFileSync('./content/third.txt',`here is the resule : ${first} ${second}`,{flag :'a'}) // flag can we set to append.