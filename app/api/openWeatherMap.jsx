const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=7fd592d959eba6030951eaaeed2e84e1';

module.exports = {
  // the getTemp function must return something for the promise to work
  // that is why you need 'return axios.get(...)'
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // make the proper conversion
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    // their API doesn't return 404 for invalid request. They have their own way of handling it
    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message); // if data.message exists, it failed
        console.log("Boo. The weather request failed");
      } else {
        return res.data.main.temp;
        console.log("The request worked");
      }
    }, function (res) { // ERROR
      // throw new Error(res.data.message); // old error handler
      throw new Error('Unable to fetch weather for that location');
      console.log("Nothing was even returned");
    });
  }
};
