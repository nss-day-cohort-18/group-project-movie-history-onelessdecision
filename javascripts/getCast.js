"use strict";

let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js"),
	key = require("./tmdb-getter.js");

function getCastMembers(movieID) {
	return new Promise ((resolve, reject) => {
		console.log('Ajax request for casting beginning');
		$.ajax({
			url: `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${key.getKey().apiKey}`
		}).done((castData)=>{
			resolve(castData);
		console.log("Cast Data", castData);
		parseCastMembers(castData);
		}).fail((error)=>reject(error));
	});
}


function parseCastMembers(castData) {
	return new Promise ((resolve, reject)=>{
	let castArray = [];

		for (var i = 0; i < castData.cast.length; i++){
			castArray.push(castData.cast[i].name);
		}
		console.log("Cast Array", castArray);

	resolve(castArray);
	});
}

module.exports={getCastMembers};