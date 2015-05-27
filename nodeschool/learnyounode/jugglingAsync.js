var http = require('http');
var bl = require('bl');

function getter (url) {
	http.get(url, function(response) {
		response.pipe(bl(function (err, data) {
	  	return data.toString();
		}))
		.on('error', console.error);
	});
}

// getter(process.argv[2])
// getter(process.argv[3])
// getter(process.argv[4])

// getter(process.argv[2], process.argv[3], process.argv[4])
// getter(process.argv[3], process.argv[3], process.argv[4])
// getter(process.argv[4], process.argv[3], process.argv[4])
