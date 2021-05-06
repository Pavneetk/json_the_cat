const request = require('request');
const breedname = process.argv[2];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedname, (error, response, body) => {

  if ((error) || (JSON.parse(body)['message'])) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
  } else {
    if (body === '[]') {
      console.log("Breed not found");
    } else {
      const data = JSON.parse(body);
      console.log(data[0]['description']);
    }
  }
});