var http = require('http');
var url = require('url')
var module1 = require("./mymodules")

const PORT = 8080;

http.createServer((req,res) =>{
    res.writeHead(200, "request is okay", {
        'Content-Type': 'text/html'
    });

    
    res.write("<h2>Calculator</h2>");

    //res.write("<button> Click Me </button>")
    //console.log(req.url)
    if(urlParser.pathname === "/calculator/add"){

    }
    
    urlParser = url.parse(req.url, true);
    console.log(urlParser)
    const number1 = urlParser.query['number1']
    const number2 = urlParser.query['number2']
    const answer = module1.addCalculator(number1,number2);
    res.write(`The Addition of ${number1} with ${number2} = ${answer}`)
    res.end()
}).listen(PORT, () =>{
    console.log(`server started at port ${PORT}`)
})

