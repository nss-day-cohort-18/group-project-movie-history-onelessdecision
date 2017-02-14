"use strict";

console.log('omdb linked');

let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js"),
	user = require("./user.js");


/////////////////////////
///find movies//////////
///////////////////////


function findMovies(titleParameter) {
	return new Promise((resolve, reject)=>{
		console.log('calling to omdb');
		$.ajax({
			url: `https://api.themoviedb.org/3/search/movie?api_key=abd89fc957e293be8947e9a9ac9187bc&language=en-US&query=${titleParameter}&page=1&include_adult=false` 			
		}).done((movieData)=>{
			console.log('movieData recieved:', movieData);
			resolve(movieData);
		}).fail((error)=>reject(error));
	});
}


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