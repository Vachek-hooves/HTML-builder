const fs = require('fs');

const toRead=fs.createReadStream('01-read-file/text.txt','utf8');
let textToRead=''; // in case file text is to big, it will be connected to this variable.
toRead.on('data', chunk=> console.log(textToRead+= chunk))
// toRead.on('end',()=> console.log(textToRead.length)) // to understand how text is big. This function is opational.
toRead.on('error', error=>console.log(error.message))