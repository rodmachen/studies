A();

function C() {
	console.log("C");
	d();
}

function E() {
	console.log("E");
	f();
}

function A() {
	console.log("A");
	B();
}

function G() {
	console.log("G");
	H();

function H() {
		console.log("H");
		I();
	};
}

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
}

function B() {
	console.log("B");
	C();
}

function f() {
	console.log("F");
	G();
}

function K() {
	var rest = "KLMNOPQRSTUVWXYZ".split("");
	for (var i=0; i<rest.length; i++) {
		(function(i){
			// define the current function
			rest[i] = function() {
				console.log(rest[i]);
				if (i < (rest.length-1)) {
					rest[i + 1]();
					// TODO: call the next function
					rest[i]();
				}
			};
		})(i);
	}
}


function J() {
		console.log("J");
		K();
	}

function C() {
	console.log("C");
	d();
}
