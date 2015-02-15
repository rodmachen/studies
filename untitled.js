var nums = [1, 2, 3, 4, 5];

var rod = {
    name: "Rod",
    place: "Austin"
    }

function print(text) {
    console.log(text);
}

print(nums[4]);
print(rod.place);

function each(coll, callback) {
    if (Array.isArray(coll) === true) {
    for ( var i = 0; i < coll.length; i++ ) {
        callback(coll[i]);
    }
    }
    else {
    for (var key in coll) {
        callback(coll[key]);
    }
}

function filter(collection, predicate){
    if (Array.isArray(coll) === true) {
        var newArray = [];
        each(collection, function(cat) {
            if (predicate(cat) === true {
                newArray.push(cat);
            }
        }
    }
    else {
        var newOjb = {};
        each(collection, function(cat) {
            if (predicate(cat) === true {
                newOjb[key] = cat;
            }
        }
    }
}

filter(nums, function(item){return item > 3});
// [4,5]
// [undefined]

each(nums, print);
// 1
// 2
// 3
// 4
// 5

each(rod, print);
// Rod
// Austin

Array.isArray(nums) // true

for (var key in object){}

