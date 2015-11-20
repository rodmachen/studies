// Problem 3
// =========
// 
// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143?

function prime (limit) {
	for (var i = Math.ceil(Math.sqrt(limit)); i > 2; i--) {
		if (i % 2 !== 0 && limit % i === 0) {
			for (var j = 3; j < i; j++) {
				if (i % j === 0) {
					return i;
				}
			}
		}
	}
}

// TODO: return your answer for this prompt.
return prime(13195);
// return prime(600851475143);
