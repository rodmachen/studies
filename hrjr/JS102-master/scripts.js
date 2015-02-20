"use strict";
//Crockford"s  Problems

// Problem 2
function add(x, y) {
	return x + y;
}
function mul(x, y) {
	return x * y;
}
add(3, 4);
mul(3, 4);

// Problem 3
function identityf(x) {
	return function () {
		return x;
	};
}
// console.log(var idf = identityf(3));

// Problem 4
function addf(x) {
	return function(y) {
		return x + y;
	};
}
// console.log(addf(3)(4));

// Problem 5
function applyf(func) {
	return function addf(x) {
		return function(y) {
			return func(x, y);
		};
	};
}
// console.log(applyf(mul)(3)(4));

// Problem 6
function curry(func, x) {
		return function(y) {
			return func(x, y);
		};
}
// console.log(curry(mul, 3)(4));

// Problem 7
var inc1 = addf(1);
var inc2 = applyf(add)(1);
var inc3 = curry(add, 1);
// console.log(inc1(5));
// console.log(inc2(5));
// console.log(inc3(5));

// Problem 8
function methodize(func) {
	return function(y) {
		return func(this, y);
	};
}
Number.prototype.add = methodize(add);
// console.log((3).add(4));

// Problem 9
function demethodize(method) {
	return function(that, y) {
		return method.call(that, y);
	};
}
// console.log(demethodize(Number.prototype.add)(5, 6));
// didn't get this one because I don't know .call

// Problem 10
function twice(func) {
	return function(x) {
		return func(x, x);
	};
}
var double = twice(add);
// console.log(double(8));
var square = twice(mul);
// console.log(square(8));

// Problem 11
function composeu(func1, func2) {
	return function(x) {
		return func2(func1(x));
	};
}
// console.log(composeu(double, square)(3));

// Problem 12
function composeb(func1, func2) {
	return function(x, y, z) {
		return func2(func1(x, y), z);
	};
}
// console.log(composeb(add, mul)(2, 3, 5));

// Problem 13
function once(func) {
	return function () {
		var f = func;
		func = null;
		return f.apply(this, arguments);
	}
}
var addOnce = once(add);

// console.log(addOnce(3, 7));
// console.log(addOnce(3, 7));
// didn't get this one because I don't know .apply

// Problem 14
function counterf(x) {
	return {
		inc: function(){return x += 1;},
		dec: function(){return x -= 1;}
	};
}
var counter = counterf(10);
// console.log(counter.inc());
// console.log(counter.dec());

// Problem 15
function revocable(func) {
	var state = true;
	return {
		invoke: function(x) {
			if (state === true) {
			return func(x);
			}
		},
		revoke: function() {state = false;}
	};
}
var temp = revocable(alert);
// temp.invoke(7);
temp.revoke();
temp.invoke(8);






//Use this file to implement Part One of your project
var animal = {};
animal.username = "Clara";
// console.log(animal.username)
animal.tagline = "Milky goodness";
// console.log(animal.tagline)
var noises = [];
animal["noises"] = noises;
// console.log(animal);
for(var key in animal) {
	var count = 0;
	count++;
	if (key === "username") {
		// console.log("Hi my name is " + animal[key])
	} else if (key === "tagline") {
		// return animal[key];
		// console.log("I like to say " + animal[key])
	}
}

var noiseArray = ["moo"];
noiseArray.unshift("clomp");
noiseArray.push("slurp");
noiseArray["push"]("crunch");

// console.log(noiseArray.length);
// console.log(noiseArray[noiseArray.length - 1]);
// console.log(noiseArray);

animal.noises = noiseArray;
// console.log(animal);

var animals = [];
animals.push(animal);
var quackers = { username: "DaffyDuck", tagline: "Yippeee!", noises: ["quack", "honk", "sneeze", "growl"] }
animals.push(quackers);
// console.log(animals);
var swan = { username: "Mary", tagline: "Yippeee!", noises: ["quack", "honk", "sneeze", "growl"] }
var goose = { username: "Goofy", tagline: "Yippeee!", noises: ["quack", "honk", "sneeze", "growl"] }
animals.push(swan);
animals.push(goose);
// console.log(animals);
// console.log(animals.length);

function AnimalTestUser(username) {
	if (arguments !== undefined && arguments.length > 1) {
		var otherArgs = [];
		for (var i = 1; i < arguments.length; i++) {
			otherArgs.push(arguments[i]);
		}
	}
	return {username: username,
			otherArgs: otherArgs
	};

}
var testSheep = AnimalTestUser("CottonBall", {"loves dancing": true}, [1,2,3] );
// console.log(testSheep);

function AnimalCreator(username, species, tagline, noises) {
	return {
		username: username,
		species: species,
		tagline: tagline,
		noises: noises,
		friends: []
	}
}
var sheep = AnimalCreator("Cloud", "sheep", "You can count on me!", ["baahhh", "arrgg", "chewchewchew"]);
// console.log(sheep);

function addFriend(animal, friend) {
	animal.friends.push(friend.username);
}
var cow = { username: "Moo", 
         species: "sheep", 
         tagline: "You can count on me!", 
         noises: ["baahhh", "arrgg", "chewchewchew"], 
         friends: ["Cloud", "Fluffy"]
        }
var llama = { username: "Zeny", 
         species: "sheep", 
         tagline: "You can count on me!", 
         noises: ["baahhh", "arrgg", "chewchewchew"], 
         friends: ["Moo", "Butch"]
        }
addFriend(sheep, cow);
// console.log(sheep);
addFriend(sheep, llama);
// console.log(sheep);

var myFarm = [sheep, cow, llama]
// console.log(myFarm);

function addMatchesArray(farm) {
	for (var i = 0; i < farm.length; i++) {
		farm[i].matches = []; 
	}
}
addMatchesArray(myFarm); 
// console.log(myFarm[0])

function giveMatches(farm) {
	for (var i = 0; i < farm.length; i++) {
		farm[i].matches.push(farm[i].friends[Math.floor(Math.random() * farm[i].friends.length)]); 
	}
}
giveMatches(myFarm); 
// console.log(myFarm[0])

var friends = [];
for (var i = 0; i < 2; i++) {
	friends.push(animals[i].username);
}
// console.log(friends);

var relationships = {};
relationships.friends = friends;
var matches = [];
relationships.matches = matches;
// console.log(relationships);
relationships.matches.push(relationships.friends[0]);
// console.log(relationships);

for (var i = 0; i < animals.length; i++) {
	animals[i].relationships = relationships;
}

// console.log(animals);

//Closures

var nonsense = function(string) {

	var blab = function(){
	   alert(string);
	 };

	 return blab;
}

var blabLater = nonsense("hey!");
var blabAgainLater = nonsense("ho!");

var firstName = function(first) {
	var fullName = function(last) {
		console.log(first + " " + last);
	}
	return fullName;
}
var nameRod = firstName("Rod");

var storyWriter = function() {
	var story = "";
	var writer = {
		addWords: function(word) { story = story + word + " "; return story } ,
		erase: function() { story = ""; return story}
	}
	return writer;
}

var author = storyWriter();

// var Toaster = function(){
//     var voltage = 220;
//     var changeVoltage = function(volt) {
//     	voltage = volt;
//     };

//     return {
//     var speed = function(rpm) {
//     	return rpm;
//     }
//     };
// };

var funcCaller = function(func, arg) {
	return func(arg);
}

var firstVal = function(arr, func) {
	func(arr[1], 1, arr);
}

var firstVal = function(obj, func) {
	func(arr[1], 1, arr);
}

_.each([1, 2, 3], function(val, i) {
	// console.log(i)
})

var checkValue = function(array, val) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === val) {
			return true;
		} 
	}
	return false;
}

// console.log(checkValue([1, 2, 3], 4));

var checkValue2 = function(array, val) {
	var state = false;
	_.each(array, function(prop) {
		if (prop === val) {
			state = true;
		}
	})
	return state;
};

// console.log(checkValue2([1, 2, 3], 4));

var obj1 = {two: 2, four: 4, three: 3, twelve: 12}

var obj2 = _.map(obj1, function(val) {
	return val;
})

var arrayObj = function(obj) {
	var array = [];
	for (key in obj) {
		array.push(obj[key])
	} 
	return array
}

// console.log(arrayObj(obj1))

var evens = _.filter([9,8,7,6,5,2], function(num) {
	if (num % 2 === 0) {
		return num;
	}
})

// console.log(evens)




















