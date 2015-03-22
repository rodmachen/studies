// console.log("HELLO ES6")

var inputs = process.argv.slice(2);


var result = inputs.map(callback)
	.reduce(function(a, b) {
  return a.concat(b);
});

function callback(element, index, context) {
	var res;
	res.push(element.split("")[0]);
	return res;
};
