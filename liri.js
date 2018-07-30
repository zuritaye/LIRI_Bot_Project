require("dotenv").config();

var Twitter = require("twitter");
var keys = require("./keys.js");
var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

var client = new Twitter(keys.twitter);
var params = {screen_name: 'nodejs' , count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var userInput = process.argv[2];
if (userInput === "my-tweets") {
  var client = new Twitter({
    consumer_key: "XgQ7n5niSrXx1saNBf0EhM0TM",
    consumer_secret: "tCEObTGl3Ajn14ecIWRuJx4bzqgRPUXSN8vrvqFfkczWvoYfzX",
    access_token_key: "1021175593587609600-GB4tvishGiGh5YWfX3VLsW6S3C6vck",
    access_token_secret: "PEJAOZOca3l6Pbd6lDLA1kncKxA6VZy5j43ky8kkw1JEN"
  });
}

// var Spotify = require('node-spotify-api');
// var keys = require("./keys.js");
// var spotify = new Spotify({
//     id: '',
//     secret: '',
//   });

//   var spotify = new Spotify(keys.spotify);
  
//   spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//     .catch(function(err) {
//         console.error('Error occurred: ' + err); 
//   });
  
//  function newFunction() {
//    return require("./userInput"); 

//    var userInput = process.argv[3];
//    else if(userInput === "spotify-this-song"){
//     var spotify = new Spotify({
//         SPOTIFY_ID="6e5ae10d94a945c49b8096009153798a",
//         SPOTIFY_SECRET="27c4900e9c3442d4b55cfe929fd47cfe"
//      });
//     }
//   }

//     import Spotify from 'node-spotify-api';
