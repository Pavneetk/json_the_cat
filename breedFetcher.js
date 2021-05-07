const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {

    if ((error) || (JSON.parse(body)['message'])) {
      callback(error,null);
    } else {
      if (body === '[]') {//API returns '[]' for no breed
        error = "Breed not found";
        callback(error,null);
      } else {
        const data = JSON.parse(body);
        callback(null,data[0]['description']);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
