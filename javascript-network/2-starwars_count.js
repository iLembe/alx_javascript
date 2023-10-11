const request = require('request');

const apiUrl = process.argv[2]; // The API URL provided as a command-line argument
const characterId = 18; // Character ID for "Wedge Antilles"

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    const moviesWithWedgeAntilles = films.filter((film) =>
      film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
    );

    console.log( moviesWithWedgeAntilles.length);
  } else {
    console.error( response.statusCode);
  }
});
