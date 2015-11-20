var mongo = require('mongodb').MongoClient,
		url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
	if (err) throw err;
	var collection = db.collection('parrots');
	collection.find({
		age: {
			$gt: +process.argv[2]
		}
	}).toArray(function(err, docs) {
		if (err) throw err;
		console.log(docs.name.name);
		db.close();
	})
});





