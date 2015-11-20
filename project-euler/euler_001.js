// Problem 1
// =========
// 
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// 
// Find the sum of all the multiples of 3 or 5 below 1000.



// TODO: return your answer for this prompt.
// return /* solution */;

function multiples (limit) {
	var result = 0;
	for (var i = 1; i < limit; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			result = result + i;
		};
	};
	return result;
};

// console.log(multiples(1000));
return multiples(1000);
