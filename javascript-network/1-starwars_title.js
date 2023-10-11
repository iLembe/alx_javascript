const request = require('request');

const movieId = process.argv[2]; // The movie ID provided as a command-line argument

// Define the URL for the Star Wars API with the movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the API
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode === 200) {
    const movie = JSON.parse(body);
    console.log('Title:', movie.title);
  } else {
    console.error('Movie not found. Status code:', response.statusCode);
  }
});
