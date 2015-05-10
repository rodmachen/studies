var fs = require('fs')
var path = require('path')

function filter (dir, ext, callback) {
	fs.readdir(dir, function(err, list) {
		var files = [];
		if (err)
	  	return callback(err);
		for (var i = 0; i < list.length; i++) {
			if (path.extname(list[i]) === ("." + ext)) {
				files.push(list[i]);
				console.log(list[i]);
			}
		}
		callback(null, files)

	});
}

module.exports = filter