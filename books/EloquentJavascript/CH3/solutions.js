// Exercise 1

function min(...args) {
    return Number(args.reduce((current, next) => {
        current[0] = (current[0] === undefined 
        || next < current[0]) ? next : current[0]
      	return current;
    }, []));
}

// Okay, that one uses knowledge outside the scope of this chapter. Let's try it again.

function min(num1, num2) {
return (num1 < num2) ? num1 :  num2;
}

// Exercise 2

function isEven(num){
  return (num % 2 === 0)
}

// this solution isn't recursive, let's try another, and deal with the challenge to fix negative integers

function isEven(num){
  if (Math.abs(num) <= 1){
    return Boolean(!Math.abs(num));
  }
  else {
  return isEven(Math.abs(num) - 2);
  }
}

// Exercise 3

function countBs(str){
	return countChar(str, "B");
}

function countChar(str, chr){
  let i = 0, n = 0;
  while (i < str.length){
        if (str[i] === chr){
    n++
    }
        i++
  }
  return n;
}
