const fs = require('fs')
const path = require('path');



fs.readFile('01-read-file/text.txt', 'utf8', (err,data)=>{
    if (err) throw err;
    console.log(data)
})


console.log(path.dirname(__filename));
console.log(path.basename(__filename));