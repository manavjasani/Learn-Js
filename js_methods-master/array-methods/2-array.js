var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
let longWord;
let long = 0;  
const longest = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > long) {
        long = arr[i].length;
        longWord = arr[i];
      }
    }
    return longWord;
  } 



var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
const sumArray = function(arr) {
  const red = arr.reduce((acc, move) => {
    return acc += move;
  }, arr[0]);
  return red;
}
const avg = sumArray(numbers1) / numbers1.length;



var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
const averageNumbers = function(arr) {
  const avg = arr.reduce((acc, move) => {
      return acc += move;
  }, arr[0]);
    return avg / arr.length;;
}



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

const averageWordLength = function(arr) {
let length = 0;
for(let i = 0; i < words2.length; i++) {
      length += words2[i].length;
    }
     return length / words2.length;
}
