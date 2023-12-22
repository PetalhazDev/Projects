const httpserver = require('http')
const urlModule = require('url')
const calculatorModule = require("./urlm.js")

const PORT =8089

const htmlFile = `<h2>Basic Calculator</h2><p>Input param through the browser url </p>`
httpserver.createServer((req,res) =>{
    console.log(`Request url of client is ${req.url}`)
    res.writeHead(200, "All is seem perfect", {
        "Content-type": "text/html"
    })
    const parser = urlModule.parse(req.url,true);
    console.log(parser)
    res.write(htmlFile);
    if(parser.pathname ==="/calculator/multiplication"){
        number1 = parser.query["number1"]
        number2 = parser.query["number2"]

        if(isNaN(number1) || isNaN(number2)){ 
            res.write("Enter a valid number")
        }
        else{
            const answer = calculatorModule.multiplyNumbers(number1,number2)
            res.write(` ${number1} * ${number2} = ${answer}`)
        }

    }
        

        
    
    res.end()

    
}).listen(PORT,function(){
    console.log("server started at PORT :" +PORT)
})