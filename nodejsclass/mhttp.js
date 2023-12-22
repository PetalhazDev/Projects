/*const httpserver = require('http')
const PORT =8089

httpserver.createServer((req,res) => {
    console.log(req)
    console.log(res)
}).listen(PORT,function(){
    console.log("server started at PORT :" +PORT)
})*/


const httpserver = require('http')
const PORT =8089

const htmlFile = `<h2>Basic Calculator</h2>`
httpserver.createServer((req,res) => {
    console.log(`Request url of client is : ${req.url}`)
    res.writeHead(200, "All seems perfect", {
        "Content-type" : "text/html"
    })
    res.write(htmlFile);
    res.write("<button style= 'color:red'>Hi click me</button>")
    res.end()
    
}).listen(PORT,function(){
    console.log("server started at PORT :" +PORT)
})

