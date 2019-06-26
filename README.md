# liri-node-app
LIRI Homework Assignment

### Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Commands for LIRI

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

Within your terminal - use the following commands to return specific data: 

   * `concert-this <artist/bandname here>`
        * This will search the Bands in Town Artist Events API for an artist/band and render the following information about each event to the terminal:
            * Name of the venue
            * Venue location
            * Date of the event

   * `spotify-this-song <song name here>`
        * This will show the following information about the song in your terminal:
            * Artist(s)

            * The song's name

            * A preview link of the song from Spotify

            * The album that the song is from

            * If no song is provided then your program will default to "The Sign" by Ace of Base.

   * `movie-this <movie name here>`
        * This will output the following informatino to your terminal:
            * Title of the movie.
            * Year the movie came out.
            * IMDB Rating of the movie.
            * Rotten Tomatoes Rating of the movie.
            * Country where the movie was produced.
            * Language of the movie.
            * Plot of the movie.
            * Actors in the movie.

   * `do-what-it-says`
        * Using the `fs` Node package, LIRI takes the text inside of random.txt and calls `spotify-this-song` for "I want it That Way"


### Video Link 
https://drive.google.com/file/d/1d4ZYPkMsqUh8mnjkB8hKZGDxHlBvYCS6/view?usp=sharing

### Contributor to LIRI
    Alex did this - with some help from Dameon, Luzanne, Jorge, Eric and JohnnyD. 
 



