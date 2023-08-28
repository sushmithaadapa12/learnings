
const request = require('request'); 
var API_KEY = 'c1d89563d69ebedc8bfd03b966409835'; 
  
const forecast = function (latitude, longitude) { 
  
var url = `http://api.openweathermap.org/data/2.5/weather?`
            +`lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  
    request({ url: url, json: true }, function (error, response) { 
        if (error) { 
            console.log('Unable to connect to Forecast API'); 
        } 
          else { 
  
            console.log('It is currently '
                + response.body.main.temp
                + ' degrees out.'
            ); 
  
            console.log('The high today is '
                + response.body.main.temp_max 
                + ' with a low of '
                + response.body.main.temp_min
            ); 
  
            console.log('Humidity today is '
                + response.body.main.humidity
            ); 
        } 
    }) 
} 
  
var latitude = 22.7196; // Indore latitude 
var longitude = 75.8577; // Indore longitude 
  
// Function call 
forecast(latitude, longitude); 