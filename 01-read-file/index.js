const fs = require('fs');
const path= require('path');
const fileLocation=path.join(__dirname, 'text.txt');

const toRead=fs.createReadStream(fileLocation);
let textToRead=''; // in case file text is to big, it will be connected to this variable.
toRead.on('data', chunk=> console.log(textToRead+= chunk))
toRead.on('error', error=>console.log(error.message))