"use strict";


let firebase = require("../lib/node_modules/firebase/app.js"),
    fb = require("./tmdb-getter.js"),
    fbData = fb();

require("../lib/node_modules/firebase/auth.js");
require("../lib/node_modules/firebase/database.js");

var config = {
  apiKey: fbData.apiKey,
  databaseURL: fbData.databaseURL,
  authDomain: fbData.authDomain
};

firebase.initializeApp(config);

module.exports = firebase;