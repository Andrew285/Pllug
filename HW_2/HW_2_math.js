//PROPERTIES
	
console.log("Math.PI = " + Math.PI.toString());
console.log("Math.LN10 = " + Math.LN10.toString());
console.log("Math.LN2 = " + Math.LN2.toString());
console.log("Math.LOG10E = " + Math.LOG10E.toString());
console.log("Math.LOG2E = " + Math.LOG2E.toString());
console.log("Math.E = " + Math.E.toString());
console.log("Math.SQRT2 = " + Math.SQRT2.toString());
console.log("Math.SQRT1_2 = " + Math.SQRT1_2.toString());

//METHODS

let a = 8;
let b = 10;
//The Math.abs() function returns the absolute value of a number. That is, it returns x
// if x is positive or zero, and the negation of x if x is negative.
console.log(Math.abs(a - b));

//acos(), asin(), atan()
console.log(Math.acos(a / b));
console.log(Math.asin(a / b));
console.log(Math.atan(a / b));


//log()
console.log(Math.log(625) / Math.log(5));

//min(), max()
console.log(Math.min(1, 5, -3));
console.log(Math.max(1, 5, -3));

//sqrt()
console.log(Math.sqrt(81));

//pow()
console.log(Math.pow(9, 3));

//floor(), ceil(), round()
console.log(Math.round(a / b));
console.log(Math.floor(a / b));
console.log(Math.ceil(a / b));

//random()
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 10));
console.log(Math.round(Math.random() * 10));