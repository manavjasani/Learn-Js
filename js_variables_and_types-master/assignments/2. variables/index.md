1. In code below "Mark" is a string. What is name?

```js
var name = "Mark";
```
Variable

2. Find the error if any

```js
  var product cost = 3.45;
```
identifier not valid

3. Write `Right or Wrong` next to the code below.

```js
  "Hello World"
  'Hello World" 
  "Hello World'
  'Hello World'
```
1. Right
2. Wrong
3. Wrong
4. Right

## Write `VALID` and `INVALID` infront of the variable name defined below

```js
var man; `VALID`
var 1girl; `INVALID`
var woman3; 'VALID'
var -girl; 'INVALID'
var blackDog; 'VALID'
var 42; 'INVALID'
var $42; 'VALID'
var userName; 'VALID'
var x, y, z; 'VALID'
var x = 5, y = 6, z = 7; 'VALID'
var x = 5 + 10 + 2; 'VALID'
var user = "Tyrion"; "Arya"; "John"; 'VALID'
```

## Basic Operations

Mathematical Operations:

Solve this using mathematical operations. (+, -, \*, / , etc)

```js
var amount = 2080;
// Define a new variable and store the value that is 80 less then the value of amount.
let new = 80;

// Define a new variable and store the value that is 200 more then the value of amount.
let new1 = 200;

// Define a new variable and store the value that is 4 times the value of amount.
let new2 = 4 * amount;

// Define a new variable and store the reminder when the value of amount is  divided by 21.
let new3 = amount % 21;
```


## var, let and const

Write down the code or if there is any error write down the error.

```js
var user = "Sameer";
// Reassign the value of user to "Sam"
user = "Sam";
// Define a variable with name user with value "Irfan"
var user = "Irfan";

let number = 21;
// Reassign the value of number to 60
number = 60;
// Define another variable called number with the value of 100
let number = 100;
// error : number already been defined;

const username = "Admin";
// Reassign the value of username to "Arya"
username = "Arya";
// error : assign to const variable;

// Define a variable called usernae with value "John"
const username = "John";
// error : variable already been defined;
```

Logical Operation:

Solve this using logical operations. (<, >, &&, ||)

```js
var johnAge = 45;
var markAge = 35;

// Check who is older eithe John or Mark
if(johnAge > markAge) {
  return 'john is older';
} else {
  return 'mark is older';
}
// Check who is younger
if(johnAge < markAge) {
  return 'john is younger';
} else {
  return 'mark is younger';
}
// Check if their age is equal
if(johnAge == markAge) {
  return 'ages are same';
}
// Create a new variable and assign the age of john to new variable.
var johnAge2 = 45;

// Check if john is equal to or greater then mark.
if(johnAge >= markAge) {
  return 'john is older then mark';
} 

// Check if john is less then or equal to mark.
if(johnAge <= markAge) {
  return 'john is younger then mark';
} 

// Calculate the average age of john and mark and assign to a new variable.
const calcAvg = (johnAge2 + markAge) / 2;
```

Output of the following and why :

```js
let charactor = "Arya";
charactor = "John";
console.log(typeof charactor);
String
```

Output of the following and why :

```js
let charactor = "Arya";
console.log(typeof charactor);
charactor = 10;
String
```

valid or not (why)

```js
null = 10;
console.log(null);
not Valid;
```
