// 05 Context
DOT = function(obj, prop) {
	if (obj.hasOwnProperty(prop)) {
		return obj[prop];
	} else {
		return DOT(obj.__proto__, prop)
	}
}

// 05 Context
DOTCALL = function(obj, prop, args){

}

// 06 Prototypes
NEW = function(constructor, args){

}

INSTANCEOF = function(obj, constructor){

}