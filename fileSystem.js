const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Writing to a file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully');
});

// Deleting a file
fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully');
});
