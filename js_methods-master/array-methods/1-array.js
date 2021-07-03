// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods
  numbers.push(5);
  numbers.pop();
  strings.unshift("javascript");
  strings.shift();

// Find largest number in numbers 
  let largeNo = 0;
  for(let i = 0; i < numbers.length; i++) {
    numbers[i] > largeNo ? largeNo = numbers[i] : largeNo;
  }

// Find longest string in strings
  let strlength = 0;
  let longest;
  for(let i = 0; i < strings.length; i++) {
    if(strings[i].length > strlength) {
      longest = strings[i];
      strlength = strings[i].length;
    } 
  }

// Find all the even numbers
const evenNo = numbers.filter((num) => { 
  if(num % 2 == 0) return num;
});

// Find all the odd numbers
const oddNo = numbers.filter(num => {
  if(num % 2 == 1) return num;
});

// Find all the words that contain 'is' use string method 'includes'
  let arr = [];
  for(let i = 0; i < strings.length; i++) {
    if(strings[i].includes('is')) {
      arr.push(strings[i]);
    }
  }

// Find all the words that contain 'is' use string method 'indexOf'
  let word = strings.map(val => {
        if ( -1 != val.indexOf('is') ) {
          return val ;
        }
    }).filter( x => x != undefined );


// Check if all the numbers in numbers array are divisible by three use array method (every)
  numbers.every(num => num % 3 === 0);
  
//  Sort Array from smallest to largest
  numbers.sort((a, b) => a - b);

// Remove the last word in strings
  strings.pop();

// Add a new word in the array
  strings.push('words');

// Remove the first word in the array
  strings.shift();

// Place a new word at the start of the array use (upshift)
  strings.unshift('this');

// Make a subset of numbers array [18,9,7,11]
  numbers.slice(3, 7);

// Make a subset of strings array ['a','collection']
  strings.slice(2, 4);

// Replace 12 & 18 with 1221 and 1881
  numbers.splice(8, 1, 1221);
  numbers.splice(9, 1, 1881);

// Replace words with string in strings array
  strings.splice(5, 1, 'string');

// Customers Array
  var customers = [
    { firstname: "Joe", lastname: "Blogs" },
    { firstname: "John", lastname: "Smith" },
    { firstname: "Dave", lastname: "Jones" },
    { firstname: "Jack", lastname: "White" }
  ];
// Find all customers whose firstname starts with 'J'
  customers.filter(val => {
    const arr = val.firstname;
    if(arr[0] !== 'J') return val = [];
  })

// Create new array with firstname and lastname
  let fName = [];
  let lName = [];
  customers.map(val => {
    fName.push(val.firstname);
  });
  customers.map(val => {
    lName.push(val.lastname);
  });

// Sort the array created above alphabetically

fName.sort();
lName.sort();
console.log(lName);
  