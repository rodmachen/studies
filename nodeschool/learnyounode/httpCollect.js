var http = require('http');
var bl = require('bl');

function getter (url) {
	http.get(url, function(response) {
		response.pipe(bl(function (err, data) {
	  	console.log(data.length);
	  	console.log(data.toString());
		}))
		.on('error', console.error);
	});
}

getter(process.argv[2])

	
		// .setEncoding('utf8')

		// .on("data", function (data) {

		// })