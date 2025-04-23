const fs = require('fs'); // Import the file system module

const fileName = 'example.txt';

//Write to a file 
fs.writeFile(fileName, 'Hello, Node.JS!', (err)=>{
    if(err) throw err;
    console.log('File created and content written.')
} )