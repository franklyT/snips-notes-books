// Exercise 1

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arg) {
	return arg.reduce((a, b) => a.concat(b));
}

console.log(flatten(arrays));

// Exercise 2

function loop(val, tfunc, ufunc, bfunc) {
  if (tfunc(val)) {
    bfunc(val);
    loop(ufunc(val), tfunc, ufunc, bfunc);
  }
 return false;
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// This one took some trial and error to get the loop right, but was ultimately not complex with recursion.
