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
			url: `http://www.omdbapi.com/?t="${titleParameter}"`
			// url: `./rambo.json`
		}).done((movieData)=>{
			resolve(movieData);
		}).fail((error)=>reject(error));
	});
}

//work for multiple movies
function parseMovies(movieData) {
	console.log('parseMovie starts');

	return new Promise((resolve, reject)=>{

	let moviesArray = [],
		movieObject = {};

	Object.keys(movieData).forEach((movie)=> {

			movieObject = {

				title : movieData[movie].Title,
				poster : movieData[movie].Poster,
				plot : movieData[movie].Plot,
				actors : movieData[movie].Actors,
				year : movieData[movie].Year,
				imdbid : movieData[movie].imdbid
		};
		moviesArray.push(movieObject);
	});
		console.log('movieObject', movieObject);
		console.log('moviesArray', moviesArray);
		resolve(moviesArray);
	});
}

module.exports = {findMovies, parseMovies};