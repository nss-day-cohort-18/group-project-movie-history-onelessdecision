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
function findMovies(titleParameter) {
	return new Promise((resolve, reject)=>{
		console.log('calling to omdb');
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=${key.getKey().apiKey}&language=en-US&query=${titleParameter}&page=1&include_adult=false`
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
				id : movie.id
		};
		moviesArray.push(moviesObject);
	});
		console.log('moviesArray passed from parser:', moviesArray);
		resolve(moviesArray);
	});
}

module.exports = {findMovies, parseMovies};