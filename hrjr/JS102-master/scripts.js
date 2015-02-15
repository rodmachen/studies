//Use this file to implement Part One of your project
var animal = {}
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
		// console.log('Hi my name is ' + animal[key])
	} else if (key === "tagline") {
		// return animal[key];
		// console.log('I like to say ' + animal[key])
	}
}

var noiseArray = ['moo'];
noiseArray.unshift('clomp');
noiseArray.push('slurp');
noiseArray['push']('crunch');

// console.log(noiseArray.length);
// console.log(noiseArray[noiseArray.length - 1]);
// console.log(noiseArray);

animal.noises = noiseArray;
// console.log(animal);

var animals = [];
animals.push(animal);
var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
animals.push(quackers);
// console.log(animals);
var swan = { username: 'Mary', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
var goose = { username: 'Goofy', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
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
var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
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
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
// console.log(sheep);

function addFriend(animal, friend) {
	animal.friends.push(friend.username);
}
var cow = { username: 'Moo', 
         species: 'sheep', 
         tagline: 'You can count on me!', 
         noises: ['baahhh', 'arrgg', 'chewchewchew'], 
         friends: ['Cloud', 'Fluffy']
        }
var llama = { username: 'Zeny', 
         species: 'sheep', 
         tagline: 'You can count on me!', 
         noises: ['baahhh', 'arrgg', 'chewchewchew'], 
         friends: ['Moo', 'Butch']
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
	console.log(i)
})






















