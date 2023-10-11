const request = require('request');
const fs = require('fs');

const url = process.argv[2]; // URL to request, provided as the first command-line argument
const filePath = process.argv[3]; // File path to store the body response, provided as the second command-line argument

// Make a GET request to the URL
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode === 200) {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } /*else {
        console.log();
      }*/
    });
  } else {
    console.error('Failed to fetch webpage. Status code:', response.statusCode);
  }
});
