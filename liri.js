//code to read & set variables with the dotenv package
require("dotenv").config();

//add code to import the keys.js file 
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

//Node liri.js my-tweets
//System to display last 20 tweets & when created
function myTweets(display, created) {
    this.display = display;
    this.created = created;
    this.showLast = function() {
        if(this.display === true) {
            console.log(this.created);
        }
    };
}
var Twitter = new myTweets(true, "Display last 20 Tweets" + "When created.");

Twitter.showLast();

//Node liri.js spotify-this-song '<song name here>'
//System displays; artists, song name, preview link, album
//If no song provided, system defaults to "The Sign" by Ace of Base
function Songs(artists, song, link, album){
    this.artists = artists;
    this.song = song;
    this.link = link;
    this.album = album;

    this.printstats = function() {
        console.log("Songs" + this.artists + this.song + this.link + this.album)
    };
    this.information = function(){
        if(this.Songs == true){
            console.log('this.artists' + 'this.song' + 'this.link' + 'this.album');
        }
        else{
            console.log("The Sign by Ace of Base");
        }
    }
}
    













