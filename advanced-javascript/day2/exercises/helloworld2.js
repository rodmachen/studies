function readFile(filename) {
var sq = ASQ();

	fs.readFile( filename, sq.errfcb() );

	return sq;
}

var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

function delayMsg(done, contents) {
	setTimeout(function(){
		done(contents);
	}, 3000);
}

function say(filename) {
	return readFile(filename)
		.then(delayMsg);
}

module.exports.say = say