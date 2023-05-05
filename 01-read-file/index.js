const fs = require('fs')
const path = require('path');

fs.readFile(path.join('text.txt'),
    'utf-8',
    (err, data)=>{
        if(err) throw err;
        console.log(data)
    }
)

console.log(path.dirname(__filename));