var fs = require('fs')
var path = require('path')

function filter (dir, ext) {
	fs.readdir(dir, function(err, list) {
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === ("." + ext)) {
				console.log(list[i]);
			}
		}
	});
}


filter(process.argv[2], process.argv[3])