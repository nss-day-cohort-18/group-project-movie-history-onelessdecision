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

let userArray = [];

//////////////////////
//      MODULES		//
//////////////////////

let user = ;
	fbConfig = ;
	fbGetter = ;
	dom = ;
	dbInteract = ;


/////////////////////
//LOAD SPLASH PAGE //
/////////////////////

user.logout;
load DOM
if (new user or historical user with no movies)
	DOM wrapper displays a message asking user to search and add movies
 	
if (historical user with movies saved)
	ajax to firebase with userID
	load movies catalogued in firebase

/////////////////////
// EVENT HANDLERS  //
/////////////////////

find new
search your
login
show watched
show unwatched
add to watchlist
mark as watched
stars

//////////////////////
//BUILD MOVIE OBJECT//
//////////////////////

build movie object
	sends info to firebase to store (userid, movie title, year, actors, watched boolean, rating[if applicable] )
