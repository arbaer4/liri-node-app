
//.env file required
require("dotenv").config();

//axios required
var axios = require("axios");

//link keys page
var keys = require("./keys.js");

//file systems required
var fs = require("fs");

// const chalk = require ('chalk');


//Spotify 
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// //OMDB
// var omdb = (keys.omdb);

//Bands In Town
var bandsintown = (keys.bandsintown);



var command = process.argv[2];
var input = process.argv;
var x = "";
for (var i=3; i<input.length; i++){
    if(i>3 && i<input.length){
      x = x + " " + input[i];
    } else{
      x = x + input[i];
    }
  }



// We will then create a switch-case statement
// The switch-case will direct which function gets run.
function userRequest(x, command){ 
    switch (command) {

        case "concert-this":
          concertThis(x);
          break;
        
        case "spotify-this-song":
          spotifyThis(x);
          break;
        
        case "movie-this":
          movieThis(x);
          break;
        
        case "do-what-it-says":
          doWhatItSays(x);
          break;
        }
}

userRequest(x, command);

//SPOTIFY
//============================================================================
function spotifyThis(song){
    


    spotify.search({ type: 'track', query: song, limit: 1}, function(error, data){
      if(!error){
        for(var i = 0; i < data.tracks.items.length; i++){
          var songData = data.tracks.items[i];
          //artist
          console.log("Artist: " + songData.artists[0].name);
          //song name
          console.log("Song: " + songData.name);
          //spotify preview link
          console.log("Preview URL: " + songData.preview_url);
          //album name
          console.log("Album: " + songData.album.name);
          console.log("-----------------------");
          
        }
       
      } else{
        cconsole.log("Error", error.message);
      }
      
    });
  }

 
//OMDB
//========================================================================

function movieThis(movieName){

//movie or song
var x = "";
//attaches multiple word arguments
for (var i=3; i<input.length; i++){
  if(i>3 && i<input.length){
    x = x + "+" + input[i];
  } else{
    x = x + input[i];
  }
}
if (movieName == undefined){
    movieName = "Mr. Nobody";


}
console.log(movieName);
console.log("movie-this called");



// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";


// Then create a request with axios to the queryUrl
 axios.get(queryUrl).then(
     function(response) {
         console.log("Title of the movie: " + response.data.Title);
         console.log("The movie's release year is: " + response.data.Year);
         console.log("The movie's rating is: " + response.data.imdbRating);
         console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
         console.log("The movie was produced in: " + response.data.Country);
         console.log("The movie's language is: " + response.data.Language);
         console.log("The plot of the movie: " + response.data.Plot);
         console.log("Actor's in the movie: " + response.data.Actors);
        
     })


  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}


//BANDS IN TOWN
//========================================================================

function concertThis(artist){
   
//movie or song
var x = "";
//attaches multiple word arguments
for (var i=3; i<input.length; i++){
  if(i>3 && i<input.length){
    x = x + "+" + input[i];
  } else{
    x = x + input[i];
  }
}
console.log(x);
    
    console.log("concert-this called");
    
    // Then run a request with axios to the OMDB API with the movie specified
    
    var queryUrl = "https://rest.bandsintown.com/artists/" + x + "/events?app_id=codingbootcamp";
    console.log(queryUrl);
    
    // Then create a request with axios to the queryUrl
     axios.get(queryUrl).then(
         function(response) {
             console.log("Name of Venue: " + response.data[0].venue.name);
             console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
             console.log("Date of the Event: " + response.data[0].datetime);
            
         })
    
    
      .catch(function(error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("---------------Data---------------");
          console.log(error.response.data);
          console.log("---------------Status---------------");
          console.log(error.response.status);
          console.log("---------------Status---------------");
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    }