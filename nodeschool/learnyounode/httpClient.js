var http = require('http');

function getter (url) {
	http.get(url, function(response) {
		response.setEncoding('utf8').on("data", function (data) {
	  	console.log(data);
		}).on('error', console.error);
	});
}

getter(process.argv[2])
