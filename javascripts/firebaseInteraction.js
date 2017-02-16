"use strict";
let $ = require("../lib/node_modules/jquery/dist/jquery.min.js");
let user = require("./user");
let fbData = {};

//ihateeverything

fbData.makeObj = function(){
	let button = event.currentTarget;
	let movieObj = {
    title: $(button).attr("title"),
    release_date: $(button).attr("date"),
    poster_path: $(button).attr("poster"),
    overview: $(button).attr("plot"),
    id: $(button).attr("movieid"),
    uid: user.getUser()
  };
  console.log(movieObj);
  return movieObj;
};


fbData.addMovie = function(Obj) {
    return new Promise(function(resolve, reject){
        $.ajax({
            url: 'https://movie-history-70b20.firebaseio.com/movie.json',
            type: 'POST',
            data: JSON.stringify(Obj),
            dataType: 'json'
        }).done(function(){
            resolve();
        });
    });
};

module.exports = fbData;
