const fs =  require ('fs');

// Reading a file 
fs.readFile('example.txt', 'utf8' , (err, data) => {
    if (err) throw err;
    console.log(data);
});

//wrting to a file 
fs.writeFile('example.text', 'Hello, Node.js!', (err)=> {
     if(err) throw err;
     console.log('File written successfully');
});

// Deleting a file
fs.unlink('example.txt', (err)=> {
    if (err) throw err;
    console.log('File deleted successfully');
});