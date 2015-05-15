var http = require('http');
var bl = require('bl');

function getter (url1, url2, url3) {
	var arr = []
	http.get(url1
		response.pipe(bl(function (err, data) {
	  	arr.push(data.toString());
		}))
		.on('error', console.error);
	});
	consol.log(arr)
}

getter(process.argv[2], process.argv[3], process.argv[4])



	
		// .setEncoding('utf8')

		// .on("data", function (data) {

		// })