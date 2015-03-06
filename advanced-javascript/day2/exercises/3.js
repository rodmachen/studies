// write some node code finally!
// process.stdout.write("Hello world");

function printHelp() {
	console.log("3.js (c) Rod Machen");
	console.log("");
	console.log("usage:");
	console.log("--help");
	console.log("--file={NAME} 			read the file of {NAME} and output it");
	console.log("");
}

var args = require("minimist")(process.argv.slice(2), {string: "file"});

if (args.help || !args.file) {
	printHelp();
	process.exit(1);
}

var hello = require("./helloworld3.js");

hello.say(args.file)
.val(function(contents) {
	console.log(contents.toString());
})
.or(function(err){
	console.error("Error: " + err);
});


// var name = args.name

// console.log("Hello " + name);
