1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.

```js
// your code goes here
function calculateDogAge (age, convRate) {
  const dogYear =  age * convRate;
  return `Your doggie is ${dogYear} years old in dog Years!`;
}

calculateDogAge(10, 7);

2. 🎖Write a function named calculateSupply that:
  * [ ] takes 2 arguments: age, amount per day.
  * [ ] calculates the amount consumed for rest of the life (based on a constant max age).
  * [ ] outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
  * [ ] Accept floating point values for amount per day, and round the result to a round number.

// your code goes here
function calculateSupply (age, amount) {
  const amountAge = (age * 365 * amount);
  return `You will need ${amountAge} to last you until the ripe old age of ${age}`;
}

calculateSupply(10, 10);

3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Store a celsius temperature into a variable.
  * [ ] Convert it to fahrenheit and output "NN°C is NN°F".
  * [ ] Create a function called fahrenheitToCelsius:
  * [ ] Now store a fahrenheit temperature into a variable.
  * [ ] Convert it to celsius and output "NN°F is NN°C."


// your code goes here
function celsiusToFahrenheit (celTemp) {
  const cTof = (celTemp * (9 / 5)) + 32;
  return `${celTemp}°C is ${cTof}°F`;
}
function fahrenheitToCelsius (ferTemp) {
  const fToc = (ferTemp - 32) * (5 / 9);
  return `${ferTemp}°F is ${fToc}°C`;
}
celsiusToFahrenheit(10);
fahrenheitToCelsius(10);

4. 🎖The function below returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
```
  4.1 🎖Convert the above function using ternary operator.
  ```js
  // your code goes here
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
checkAge(15);

  4.2 🎖Convert the above function using `||` operator.
  ```js
  // your code goes here
  function checkAge(age) {
    return ((age > 18 && true) || confirm("Did parents allow you?"));
  }
checkAge(15);
  ```
Will the function work differently if else is removed like below?

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}
 // answer = there is no difference
Is there any difference in the behavior of these two variants? If there is what is that?


5. 🎖 Write a function pow(x,n) that returns x in power n.

  * [ ] Use prompt to take values for x and n, and then shows the result of pow(x,n) using alert.
  * [ ] In this task the function should support only natural values of n: integers greater then 1.


// Your code goes here
  function pow() {
    const a = prompt("A", "");
    const b = prompt("B", "");
    alert(Math.pow(a, b));
  }
  pow();
// After writing code uncomment to check the answer.
// pow(3, 2); // 9
// pow(3, 3); // 27
// pow(1, 100); // 1
// pow(-31, 2); // "The number below 1 is not allowed"

6. 🎖Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n. Return the result accordingly.

// your code goes here
  function num () {
    const x = prompt('1st num', '');
    const ope = prompt('+, -, *, /', '');
    const y = prompt('2nd num', '');
    alert(eval(x + ope + y))
  }
  num();

6. 🎖Write a program that asks the user for a number n using prompt and prints the sum of the numbers 1 to n

// your code goes here
  const n = prompt('Write any number', '');
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  alert(sum);

7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71

// your code goes here
  const n = prompt('Write any number', '');
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      if(i % 5 == 0 || i % 7 == 0){
        sum += i
      }
    }
    alert(sum);

8. 🎖Write a function `min` that takes two arguments and returns their minimum.

```js
// Your code here.
function min(x, y) {
  return (x < y) ? x : y;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```