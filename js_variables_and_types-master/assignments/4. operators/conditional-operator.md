## If Statement
1.  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div

    function Add(a, b) {
      return a + b;
    }
    function Sub(a, b) {
      if (a > b) {
        return a - b;
      } else {
        alert(`Number Two is larger then Number one`);
      }
    }
    function Mul(a, b) {
      return a * b;
    }
    function Div(a, b) {
      if (a > b) {
        return a / b;
      } else {
        alert(`Number Two is larger then Number one`);
      }
    }
    const num1 = prompt('First Number');
    const oper = prompt('Select Operator +, -, *, /');
    const num2 = prompt('Second Number');

    if (oper == '/'){
        alert (Div (num1, num2))
    } else if (oper == '-'){
        alert (Sub (num1, num2))
    }else if (oper == '+'){
        alert (Sum (num1, num2))
    } else if (oper == '*'){
        alert (Mul (num1, num2))
    }
    

2. 🎖Write a if else statement which checks if the status is single `console.log` the message `John is single` or else `John is married`
```js
var firstName = 'John';
var status = 'single';
// Your code goes here
console.log(firstName + ' ' + 'is' + ' ' + status);
```

3. 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
```js
// your code goes here
const num1 = prompt('first number');
const num2 = prompt('second number');
if(num1 > num2) {
  alert(num1);
} else {
  alert(num2);
}
```

4. 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.

```js
// Your code goes here
const num1 = prompt('first number');
const num2 = prompt('second number');
const num3 = prompt('third number');
const product = num1 * num2 * num3;

if(product > 0) {
  alert('+');
} else {
  alert('-');
}

```

## Switch Statement

1. 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
```js
// Your code goes here
const num = prompt('number');
  switch (+num) {
    case 1:
      alert('Number ONE');
      break;
    case 2:
      alert('Number TWO');
      break;
    case 3:
      alert('Number THREE');
      break;
    case 4:
      alert('Number FOUR');
      break;
    case 5:
      alert('Number FIVE');
      break;
    case 6:
      alert('Number SIX');
      break;
    case 7:
      alert('Number SEVEN');
      break;
    case 8:
      alert('Number EIGHT');
      break;
    case 9:
      alert('Number NINE');
      break;
    default:
      alert('PLEASE TRY AGAIN');
}

```
