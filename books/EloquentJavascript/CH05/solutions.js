// Exercise 1

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arg) {
	return arg.reduce((a, b) => a.concat(b));
}

console.log(flatten(arrays));

// Exercise 2

