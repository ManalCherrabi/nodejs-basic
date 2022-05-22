const fs = require(`fs`);
//reading
/*fs.readFile(`./docs/blog.txt`,(err, data)=>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});



//writing
fs.writeFile(`./docs/blog.txt`, `manal cherrabi` ,()=>{
    console.log(`file was writing`)
});*/

//directories 
if(!fs.existsSync(`./assets`)){
  fs.mkdir(`./assets`, (err)=> {
    if (err){
        console.log(err);
    }
    console.log('folder created');
}) 
}else {
    fs.rmdir(`./assets`, (err) =>{
        if (err){
            console.log(err);
        }
        console.log('folder removed');
    })
}
// deleting files
if (fs.existsSync(`./docs/delete.txt`)){
    fs.unlink(`./docs/delete.txt`, (err)=>{
    if (err){
        console.log(err)
    }
    console.log(`file deleted`)
   } );
}