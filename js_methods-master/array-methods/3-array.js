var words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

// Write a function uniqueArray that receives an array of words as a parameter. And remove the duplicates, and return a new array. 
// (indexOf)
  const uniqueArray = function(words) {
    const arrVal = words.filter((move, i, arr) => {
      return i == arr.indexOf(move);
    })
  }
  uniqueArray(words);


var words2 = [
  'machine',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'truth',
  'disobedience'
];

// Write a function doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise, return false. Don't use indexOf for this one.
const doesWordExist = function(words2, word) {
  for(let i = 0; i < words2.length; i++) {
    if(words2[i] == word) {
      return true;
    } 
  } return false;
}
doesWordExist(words2, 'manav');


var words3 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


// Write a function howManyTimes that will take in an array of words as one argument, and a word to search for as the other. The function will return the number of times that word appears in the array.
const howManyTimes = function(words3, word) {
  let num = 0;
  for(let i = 0; i < words3.length; i++) {
    if(words3[i] == word) { 
      num++;
    } else num;
  }return num;
}

howManyTimes(words3, 'machine');




// Using the reduce() method, how would you sum up the population of every country except China?
let data = [
  {
    country: 'China',
    pop: 1409517397,
  },
  {
    country: 'India',
    pop: 1339180127,
  },
  {
    country: 'USA',
    pop: 324459463,
  },
  {
    country: 'Indonesia',
    pop: 263991379,
  }
]

let totalPop = data.reduce( ( acc, i ) => {
  if ( i.country === "China" ) return 0;
  // console.log( acc );
  return i.pop + acc;
}, 0);




// Use reduce method and summorize the collection like
// { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig'
];

fruitBasket.reduce((acc, mov, i, arr) => {  
  if(arr.indexOf(mov) == i) {
    acc[mov] = 1;
  } else {
    acc[mov] = acc[mov] + 1;
  }
  return acc;
  
}, {});



// Bonus Question (Solve only if you have time)
var matrix = [
  [08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
  [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
  [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
  [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
  [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
  [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
  [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
  [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
  [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
  [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
  [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
  [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
  [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
  [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
  [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
  [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
  [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
  [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
  [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
  [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48],
];
// In the 20×20 grid above What is the greatest product of four adjacent numbers in the same direction (up, down, left, right)?
// Write a function greatestProduct to find the answer!
function get(arr, y, x) {
  if(y >= 0 && y < arr.length && x >= 0 && x < arr.length) {
    return arr[y][x];
  } return 0;
};

function greatestProduct(arr, k) {
  let max = 0;
  for(let i = 0; i < 20; i++) {
    for(let j = 0; j < 20; j++) {
      
      let p1 = 1, p2 = 1, p3 = 1, p4 = 1;

      for(let l = 0; l < k; l++) {
        p1 = get(arr, i, j + l);
        p2 = get(arr, i + l, j);
        p3 = get(arr, i + l, j + l);
        p4 = get(arr, i + l, j - l);
      }
      max = Math.max(p1, p2, p3, p4, max);
    }
  }
  return max;
};

console.log(greatestProduct(matrix, 4));