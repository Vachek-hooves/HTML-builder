const fs = require ('fs');
const path = require('path');
const { exit } = require('process');
const {stdin, stdout}=process;

// file creating txt
fs.writeFile('02-write-file/task2.txt',' ', function(err,file){
    if (err) throw err;
    console.log('new txt file created');

    stdout.write("please enter text what you want to save\n");

    stdin.on("data", userInput=>{ 
        stdout.write("this text to be saved-  "),
        stdout.write(userInput)

    fs.appendFile('02-write-file/task2.txt', userInput, function(err){
        if (err)throw err;
        console.log('your text saved')
    })});


    process.on('SIGINT',()=>{
        console.log('you press Ctrl+c to exit process');
        console.log('\ngood bye!');
        exit();
    });

});


    
