"use strict";

let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js"),
	user = require("./user.js");


/////////////////////////
///find movies//////////
///////////////////////


function findMovies(titleParameter) {
	return new Promise((resolve, reject)=>{
		$.ajax({
			url: `http://www.omdbapi.com/?t=${titleParameter}`
		}).done(function(movieData){
			console.log('movieData:', movieData);
			// resolve(movieData);
		}).fail((error)=>reject(error));
	});
}

module.exports = {findMovies};