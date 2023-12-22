const fs = require('fs')
const items = require('./index1.js')

try{
    fs.mkdirSync("./jsonDirectory");
    console.log("\nDirectory created")
    fs.writeFileSync("./jsonDirectory/items.json", JSON.stringify(items))
    console.log("content written to file")
}catch(e){
    //statements
    console.log(e)
    console.log("error occured creating directory/")
}