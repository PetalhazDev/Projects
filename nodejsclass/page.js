//creating a file directory and removing a file directory
const fs = require('fs')
const path = require('path')
//console.log(path)

// a sample app that list directories,search for js files (or you can also search for json files)
//getting files in a dir with a particulat type extention

fs.readdir("../", (err,files) =>{
if(err){
    console,log(err)
}else{
    console.log("Listing out file with a particular .json extension")
    filecount = 0
    console.log("---------------------")
    files.forEach(file =>{
        if(path.extname(file) == '.json'){
            filecount++;
            console.log(file)
        }
    })
}
//creating a file directory and removing a file directory
const fs = require('fs')
const path = require('path')
//console.log(path)

// a sample app that list directories,search for js files (or you can also search for json files)
//getting files in a dir with a particulat type extention

fs.readdir("../", (err,files) =>{
if(err){
    console,log(err)
}else{
    console.log("Listing out file with a particular .json extension")
    filecount = 0
    console.log("---------------------")
    files.forEach(file =>{
        if(path.extname(file) == '.json'){
            filecount++;
            console.log(file)
        }
    })
}

    
})
console.log(`\nfound ${filecount} files with.json extension`)
console.log("------------------\n")

console.log("Listing out folders")
foldercount = 0
console.log("----------------------")
files.forEach(file =>{
    if(path.extname(file) == ''){
        foldercount++;
        console.log(file)
    }
})
console.log(`\nfound ${foldercount} folders`)
console.log("-------------------------\n")

    
})
console.log(`\nfound ${filecount} files with.json extension`)
console.log("------------------\n")

console.log("Listing out folders")
foldercount = 0
console.log("----------------------")
files.forEach(file =>{
    if(path.extname(file) == ''){
        foldercount++;
        console.log(file)
    }
})
console.log(`\nfound ${foldercount} folders`)
console.log("-------------------------\n")
