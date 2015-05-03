var fs = require('fs')

var text = fs.readFile(process.argv[2], function(err, text) {
	console.log(text.toString().split("\n").length - 1)
});
