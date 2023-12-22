const fs = require('fs')
const path = require('path')

function readHtmlFile(file_path){
    try{
        reader = fs.readFileSync(file_path)
        return reader.toString();
    } catch(error) {
        //statments
        console.log(error);
        return`<p> Sorry, This page is not availabe at this present point in this time</p><br> <span>do check `
    }
}

function createDirectory(file_path){
    try{
        path_file_uppercase_file.toUpperCase()
        fs.mkdirSync(path_file)
        console.log("directory created")
        return true;
    }catch(error){
        console.log("directory not created")
        console.log(error);
        return false;
    }
}

exports.readHtmlFile = readHtmlFile;

exports.createDirectory = createDirectory;

//createDirectory("NEW_FOLDER")



/*fs.readdir("../", (err,files) =>{
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
console.log("-------------------------\n")*/
