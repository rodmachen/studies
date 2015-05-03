var fs = require('fs')

var text = fs.readFileSync(process.argv[2], 'utf8');

var lines = text.split("\n")

// console.log(text)
console.log(lines.length - 1)