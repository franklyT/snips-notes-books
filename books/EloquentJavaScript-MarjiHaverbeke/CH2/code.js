//Exercise #1

let string = '';
for (let i = 0; i < 7; i++){
string += '#';
  console.log(string);
}

// or

let array = [];
for (let i = 0; i < 7; i++){
array.push('#');;
  console.log(array.join(''))
}


//Exercise #2

let string = ''
for (let i = 1; i < 100; i++){
  if (i % 3 == 0) {
    string += 'Fizz';
  }
  if (i % 5 == 0){
    string += 'Buzz';
  }
  if (string == ''){
    console.log(i)
  	} else {
 	 console.log(string);
 	 string = '';
  }
}

//Exercise #3 - my code is a bit sloppier than Marjin's probably is, but it works

let binding = 8,
    string = '', 
    array = [],
    n, i;

for (i = 0; i < binding; i++){
	for (n = 0; n <= binding; n++){
      if (n % 2 === 0 && n < (binding-1)) {
        string += "#";
      } 
      	else if (n < (binding-2)){
        	string += " ";
      }
    }
  string += "\n";
  
  if (i % 2 === 0){
    string = ' ' + string;
  }
  array.push(string);
  string = '';
}
console.log(array.join(''));

/* These exercises were not challenging, but I know the difficulty starts picking up substantially */
