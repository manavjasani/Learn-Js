var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
const calcAge = function(arr, animal) {
  let age = 0;
  const dogYear = 7;
  for(let i = 0; i< arr.length; i++) {
    if(arr[i].type == animal) {
      age += arr[i].age;
    }
  }
  return age * dogYear;
}
calcAge(data, 'dog');


// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

// Solution 105

const calcYear = data.filter(x => x.type == 'dog')
                      .map(y => y.age * 7)
                      .reduce((acc, mov) => acc + mov);
  console.log(calcYear);