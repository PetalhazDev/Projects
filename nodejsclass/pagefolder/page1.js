const httpserver = require('http')
const urlmodule = require('url')
const fs = require('fs')
const path = require('path')
const directoryModule = require('./logic')

const PORT =8090


httpserver.createServer((req,res) => {
    console.log(`Request url of client is : ${req.url}`)
    res.writeHead(200, "All seems perfect", {
        "Content-type" : "text/html"
    });
    //console.log(req.url)
    const html_content = directoryModule.readHtmlFile("./page1.html")
    res.write(html_content)
    let path_query = getQueryAndUrlObject(req,res);
    routeHandler(path_query,res)
    res.end()
    
}).listen(PORT,function(){
    console.log("sever started at PORT :" +PORT)
})

function getQueryAndUrlObject(req,res){
    const parser = urlModule.parse(req.url,true);
    return{
        "path" : parser.pathname,
        "query" : PerformanceServerTiming.query
    }

    //using synch method
    function getFileByExtension3(filepath,refPath,res)
    
}

function routeHandler(parserObject,res){
    const {path,query} =parserObject;
    if(path=="/newDirectory"){
        const directory_to_create = query['new-directoty-name'];
        const created =directoryModule.createDirectory(directory_to_create)
        console.log(`Directory was created : ${created}`)
        
    }
}


