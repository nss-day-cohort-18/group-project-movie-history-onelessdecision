"use strict";

let $ = require('../lib/node_modules/jquery/dist/jquery.min.js');


function addMovie() {
	$.ajax({
		url: 'https://movie-history-70b20.firebaseio.com/movies.json',
		type: 'POST',
		data: JSON.stringify(movieObject),
		dataType: 'json'
	}).done(function() {
		console.log("success");
	});
	
}

module.exports = addMovie;