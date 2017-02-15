// This file builds the DOM elements for the wrapper section of index.html.
"use strict";

let $ = require ("../lib/node_modules/jquery/dist/jquery.min.js");
	

//puts cards on the DOM takes ad array of objects (movies)
function printCards(movies) {

	return new Promise((resolve, reject)=>{

		let cards = "",	
			counter = 0;

		$("#container").html("");
		
			movies.forEach(movie => {

			cards += `<div class="thumbnail col-sm-6 col-md-4 untracked">
						<img src="https://image.tmdb.org/t/p/w500${movie.poster}" alt="...">
						<div class="caption">
							<h3>${movie.title}</h3>
							<button type="button" class="btn btn-default add-to-watchlist">Add to Watchlist</button>
							<div class="rating">
						    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
							</div>
						</div>
					  </div>`;

		    counter++;
//every three cards, make a section and prepend it to the container.		    	    				
		    if (counter % 3 === 0) {
		    var rowCount = 1;
		    $("#container").prepend(`<section class="row">${cards}</section>`);
		    rowCount ++;
		    cards = ""; 
		   }

	}); //end forEach	

  });//end promise
}//end printCards


module.exports = {printCards};






