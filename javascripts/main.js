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
	fb = require("./firebaseInteraction.js"),
	omdb = require("./omdbInteraction/");


/////////////////////
//LOAD SPLASH PAGE //
/////////////////////

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     console.log(error.Message);

// });
// user.logout();
// load DOM
// if (new user or historical user with no movies)
// 	DOM wrapper displays a message asking user to search and add movies
 	
// if (historical user with movies saved)
// 	ajax to firebase with userID
// 	load movies catalogued in firebase

/////////////////////
// EVENT HANDLERS  //
/////////////////////


omdb.findMovies("batman")
.then((movieData)=>{

//Music History > {view}


	(console.log('movieData:', movieData));
	omdb.parseMovies(movieData)
	.then((moviesArray)=>console.log('moviesArray returned form parse:', moviesArray));

});

//enterpress from search-input field
$("#search-input").keypress(function(e) {
    if(e.which == 13) {
        console.log("You pressed enter!");
    }
});

//login
$("#login").click(()=>{
	console.log('you clicked login');
	//user.logInGoolge();
	$("#login").addClass("hide");
    $("#logout").removeClass("hide");
});

//logout
$("#logout").click(()=>{
	console.log('you clicked on logout');
	$("#logout").addClass("hide");
    $("#login").removeClass("hide");
});

//show untracked
$(document).on("click", "#watched", function(){
	$("#music-history").html("Movie History > Untracked");
});

//show to watch
$("#to-watch").click(()=>{
	console.log('you clicked on show to watch');
	$("#music-history").html("Movie History > To Watch");
});

//show watched
$("#watched").click(()=>{
	console.log('you clicked on show-watched');
	$("#music-history").html("Movie History > Watched");
});

//show favorites
$("#favorites").click(()=>{
	console.log('you clicked on favorites');
	$("#music-history").html("Movie History > Favorites");
});

//add to watchlist
$(document).on("click", ".add-to-watchlist", function(){
	console.log('you clicked on add to watchlist');
});

//mark as watched
$(document).on("click", ".watched", function(){
	console.log('you clicked on watched');
});

//stars
$(document).on("click", ".stars", function(){
	console.log('you clicked on a star');
});



//////////////////////
//BUILD MOVIE OBJECT//
//////////////////////

// build movie object
// 	sends info to firebase to store (userid, movie title, year, actors, watched boolean, rating[if applicable] )
