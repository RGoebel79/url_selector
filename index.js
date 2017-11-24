/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');

const express = require('express');
const path = require('path');

var app = express();

/* var logger = function(req, res, next){
	console.log('logging');
	next();

}

app.use(logger);
*/

//set static path
//app.use(express.static(path.join(__dirname, 'public'));

app.get('/', function(req, res) {
	res.send('Hi');
});

app.listen(3000, function(){
	console.log("Server running on 3000");
})