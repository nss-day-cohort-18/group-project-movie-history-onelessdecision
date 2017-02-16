// This file enables users to interact with the default features of index.html
//  	The initial page is a splash page that asks user to log in.
//		After log in, the page loads data depending on the history of the user.
//			If the user is new or has no movies, the wrapper loads random movies for the user to see.
//			If the user has a history, the wrapper loads historical data.
// 		This file sends movie data gleaned from user input to firebase (Build Movie Object).

"use strict";

//////////////////////
// GLOBAL VARIABLES //
//////////////////////
console.log('something is happening');

let userArray = [];

//////////////////////
//      MODULES		//
//////////////////////

let $ = require("../lib/node_modules/jquery/dist/jquery.min.js"),
	user = require("./user.js"),
	fbConfig = require("./firebaseConfig.js"),
	// fbGetter = require("./firebaseGetter.js"),
	dom = require("./domBuilder.js"),
	fbData = require("./firebaseInteraction.js"),
	omdb = require("./omdbInteraction.js");



/////////////////////
//LOAD SPLASH PAGE //
/////////////////////

/////////////////////
// EVENT HANDLERS  //
/////////////////////



// //enterpress from search-input field
// $("#search-input").keypress(function(e) {
//     if(e.which == 13) {
//         omdb.findMovies($(this).val())
// 		.then((movieData)=>{
// 		console.log('movieData passed to parse:', movieData);
// 		omdb.parseMovies(movieData)
// 		.then((moviesArray)=>{});
//
// 	});
//   }
// });

//enterpress from search-input field
$("#search-input").keypress(function(e) {
    if(e.which == 13) {
        omdb.findMovies($(this).val())
		.then((movieData)=>{
		console.log('movieData passed to parse:', movieData);
		omdb.parseMovies(movieData)
		.then((moviesArray)=>{
			$("#search-input").html("");
			dom.printCards(moviesArray);
			addButtonListeners();
		});
	});
  }
});


//login
$("#login").click(()=>{
	console.log('you clicked login');
	user.logInGoogle();
	$("#registeredHeader").removeClass("hidden");
	$("#splash").addClass("hidden");
});

// //logout
$("#logout").click(()=>{
	console.log('you clicked logout');
	user.logOut();
	$("#logout").addClass("hidden");
	$("#registeredHeader").addClass("hidden");
    $("#login").removeClass("hidden");
	$("#splash").removeClass("hidden");
	$("#container").html("");


});

//show untracked
$("#untracked").click((event)=>{
	event.preventDefault();
	console.log("you clicked untracked");
	$("#music-history").html("Movie History > Untracked");
	$("#movie-nav-bar > li.active").removeClass("active");
	$(event.target).parent().addClass("active");
});

//show unwatched
$("#to-watch").click((event)=>{
	event.preventDefault();
	console.log('you clicked on show to watch');
	$("#music-history").html("Movie History > To Watch");
	$("#movie-nav-bar > li.active").removeClass("active");
	$(event.target).parent().addClass("active");
});

//show watched
$("#watched").click((event)=>{
	event.preventDefault();
	console.log('you clicked on show-watched');
	$("#music-history").html("Movie History > Watched");
	$("#movie-nav-bar > li.active").removeClass("active");
	$(event.target).parent().addClass("active");
});

//add to watchlist
function addButtonListeners(){
	$(".add-to-watchlist").click(function(){
		let movieObj = fbData.makeObj();
		fbData.addMovie(movieObj);
		console.log("you clicked the add button", movieObj);
	});
}

// stars
$(document).on("click", ".rating", function(){
	console.log('you clicked on a star');
	console.log($(this));
	$(this).parents(".js-card").addClass("watched").removeClass("unwatched");
});


////////	Range bar functionality

$("#ratings-bar").on("change", function(){
	showValue(this.value);
});

function showValue(newValue){
	$("#range").html( newValue);
	console.log("Bar changed!");
}







//////////////////////
//BUILD MOVIE OBJECT//
//////////////////////

// build movie object
// 	sends info to firebase to store (userid, movie title, year, actors, watched boolean, rating[if applicable] )
