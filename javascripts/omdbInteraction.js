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
			// url: `http://www.omdbapi.com/?t="${titleParameter}"`
			url: `./rambo.json`
		}).done((movieData)=>{
			resolve(movieData);
		}).fail((error)=>reject(error));
	});
}

//for one movie
function parseMovie(movieData){
	console.log('movieData');
	return new Promise((resolve, reject)=>{

	let movieObject = {

		title : movieData.Title,
		poster : movieData.Poster,
		plot : movieData.Plot,
		actors : movieData.Actors.split(`,`),
		year : movieData.Year,
		imdbid : movieData.imdbid
	};

	console.log('movieobject in parseMovie:', movieObject);
	resolve(movieObject);

  });
}

//work for multiple movies
function parseMovies(movieData) {
	console.log('parseMovie starts');

	return new Promise((resolve, reject)=>{

	let moviesArray = [],
		moviesObject = {};

	Object.keys(movieData).forEach((movie)=> {

			moviesObject = {

				title : movieData[movie].Title,
				poster : movieData[movie].Poster,
				plot : movieData[movie].Plot,
				actors : movieData[movie].Actors.split(`,`),
				year : movieData[movie].Year,
				imdbid : movieData[movie].imdbid
		};
		moviesArray.push(moviesObject);
	});
		console.log('moviesObject', moviesObject);
		console.log('moviesArray', moviesArray);
		resolve(moviesArray);
	});
}

module.exports = {findMovies, parseMovie, parseMovies};