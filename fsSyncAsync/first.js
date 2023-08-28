var fs = require('fs')

// console.log(oldData.toString())
// var newData = "bottle"
// fs.appendFileSync('hello.txt',newData)
// var oldData = fs.readFileSync('hello.txt')
// console.log(oldData)
// var newData =  oldData.toString() + newData;

// synchronous

// fs.writeFileSync('hello.txt','bottle')
// fs.appendFileSync('hello.txt','bottle')

// Asynchronous
var newData1 ='\nwire'
var a = fs.readFileSync('hello.txt').toString()
newData1 = a + newData1
fs.writeFile('hello.txt',newData1,(err,data) =>{
    console.log(err)
});
// fs.appendFile('hello.txt',newData1,(err,data) =>{
//     console.log(err)
// });
// fs.appe('hello.txt','\ncap',(err,data)=>{
//     console.log(err)
// });



