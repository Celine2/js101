function add (a, b){
	return a+b;
}

function sub (a, b) {
	return a-b;

}

function divide (a, b) {
	if (b===0) {
	 return "faux";
	} else { 
		return a/b;
	}

}

function multiply (a,b) {
	return a*b;
}

console.log(add(5, 10));
console.log(sub(5, 10));
console.log(divide(5, 10));
console.log(multiply(5, 10));



