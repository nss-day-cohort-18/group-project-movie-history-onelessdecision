"use strict";

console.log('omdb linked');

let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js"),
	user = require("./user.js"),
	key = require("./tmdb-getter.js");


/////////////////////////
///find movies//////////
///////////////////////

//ajax call (on keypress in search-input)
//accepts the title argument passed at invocation (value of search-input)
//we call key.getkey() to plug in the api-key needed
//movieData is an object which is passed back to the enter-key handler
function findMovies(movie) {
	return new Promise((resolve, reject)=>{
		console.log('calling to omdb');
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=205cb9bba5dd5b518208ed4a66d46f6a&language=en-US&query=${movie}`,
			type: 'GET'
		}).done((movieData)=>{
			console.log('movieData recieved:', movieData);
			resolve(movieData);
		}).fail((error)=>reject(error));
	});
}

//called on the resolve of findmovies, this function gets the "results" property of the movieData object (an array)
//forEach movie we pull the poster, title, and id and put them in movieObject and push that to moviesArray,
//passing that array back to the resolve.
function parseMovies(movieData) {

	return new Promise((resolve, reject)=>{

	let moviesArray = [],
		moviesObject = {},
		results = movieData.results;

		results.forEach((movie)=> {

			moviesObject = {

				poster : movie.poster_path,
				title : movie.title,
				date: movie.release_date,
				synopsis: movie.overview,
				tracked: false,
				watched: false,
				rating: 0,
				id : movie.id
		};
		moviesArray.push(moviesObject);
	});
		console.log('moviesArray passed from parser:', moviesArray);
		resolve(moviesArray);
	});
}

module.exports = {findMovies, parseMovies};
