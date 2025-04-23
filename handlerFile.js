const fs = require('fs');  // Import the file system module

const fileName = 'example.txt';

// Write to a file
fs.writeFile(fileName, 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File created and content written.');
    
    // Read the file
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`File Content: ${data}`);

        // Append new data
        fs.appendFile(fileName, '\nAppending new data!', (err) => {
            if (err) throw err;
            console.log('Data appended successfully.');

            // Delete the file
            fs.unlink(fileName, (err) => {
                if (err) throw err;
                console.log('File deleted successfully.');
            });
        });
    });
});
