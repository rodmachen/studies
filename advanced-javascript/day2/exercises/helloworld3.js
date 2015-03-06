function readFile(filename) {
	return ASQ(function(done) {

		var stream = fs.createReadStream(filename);
		var contents = "";

		stream.pipe(fs.createWriteStream(filename+ ".backup"));

		stream.on("data", function(chunk) {
			console.log("data");
			contents += chunk;
		});
		stream.on("end", function() {
			done(contents);
		});
	})
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