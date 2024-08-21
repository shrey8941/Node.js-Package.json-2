const lib = require('./lib.js')
const express = require('express')

const server = express()
server.listen(8080)

console.log(lib.diff(5,7),lib.sum(3,6))

console.log("shrey")

// Readwrite module

const fs = require('fs')

const txt = fs.readFileSync('./demo.txt','utf-8');
console.log(txt)

fs.readFile('demo.txt','utf8',(err,txt)=>{
    console.log(txt)
})
