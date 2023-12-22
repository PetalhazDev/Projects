
//creating a file directory

//fs =require('fs'); //this is always declare for making , reading, removing error etc
//console.log(fs)

// making a directory
// fs.mkdir("./newfolder/folder1/fold2", (err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('folder created successfully')
//     }
// });
// console.log('working on sth else')

// fs.rmdir('./newfolder/folder1/fold2',()=>console.log('operation carried out'))


//writing to a file

// const stream_writer = fs.createWriteStream('./newfolder/about.txt', options= undefined)

// //console.log(stream_writer)
// text = 'it takes a lot of dedication learning nodejs'
// stream_writer.write(text);

// stream_writer.on('finish',()=>console.log('finished writing to the file'));
// stream_writer.on('error',(err)=>console.log('errored occurred'));
// stream_writer.end()

// try {
//     const htmlcontent = `<h2>Node Fs Write system</h2> <p>With this module we can write to a file using node js </p>`;
//     fs.writeFileSync('./newfolder/folder1/index.html',htmlcontent)
//     console.log('finshed writing to html file')
// } catch (error) {
//     console.log('error using writefilesync')
// }
// console.log('i have to wait for writefilesync method to finish before printing')


// reading from files 
// const reader = fs.createReadStream('./amsd.js');

// text_content = ''
// reader.on('data', chunk =>{
//     text_content += chunk;
// })

// reader.on('error', (err)=>console.log('error occured reading from file'));

// reader.on('end',()=>{
//     console.log('\nNo more data to be read\nReady to print out content to screen\n');
//     console.log(text_content)
// });

// reader.on('close', ()=>console.log('\nReader is finally closed'))


//fs.readFileSync('./newfolder/about.txt')
/*try {
    readbuffer = fs.readFileSync('./newfolder/about.txt')
    console.log(readbuffer.toString('hex'))
    //console.log(readbuffer.toString('binary'))
    //binary,utf8,ascii,base64, hex
} catch (error) {
    console.log(error)
}*/



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
