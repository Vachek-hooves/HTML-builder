const fs = require('fs');
const path=require('path');


const root = path.join(__dirname, 'secret-folder'); // шлях до папки вище поточної
fs.readdir(root, (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((file) => {
    const eachFile= path.join(root, file);
    const eachFileExt=path.extname(eachFile);

    fs.lstat(eachFile,(err,stat)=>{
        if (err){
            console.log(err)
        }
        if (eachFileExt === '.js' && !stat.isDirectory() && file !=='index.js'){
            console.log(file +" - "+ eachFileExt +" - "+ ((stat.size)/1024).toFixed(3) + ' kb');
        } else if (!eachFileExt || stat.isDirectory()){
            return;
        }else{
            console.log(file +" - "+ eachFileExt +" - "+ ((stat.size)/1024).toFixed(3) + ' kb');
        }
        
        
    })

  });
});