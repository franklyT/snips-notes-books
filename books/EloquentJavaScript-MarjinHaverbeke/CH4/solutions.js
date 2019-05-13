// Exercise 1

function range(start, end, step = 1){
  let arr = [];
  if (start > end){
     while (start >= end){
     	arr.push(start)
  	 	start = start-Math.abs(step);
  }
    return arr;
  }
  	else if (start < end) {
   		while (start <= end){
    		arr.push(start)
    		start = start+step;
        }
      return arr;
    }
}

function sum(array){
  while (array.length > 1){
    array.splice(0, 2, array[0]+array[1]);
}
  return array;
}

// Exercise 2

function reverseArray(array) {
  let i = array.length; arr = [];
  for (i; i > 0; i--){
    arr.push(array[i-1]);
  }
  return arr;
}

function reverseArrayInPlace(array){
  let i = array.length;
  for (i; i > 0; i--){
    array.push(array[i-1]);
    array.splice(i-1, 1);
  }
  return array;
}

// Exercise 3


