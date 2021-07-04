// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];


// filter method
// in numbers array create an array of numbers greater then 25
numbers.filter(x => x > 25);

// map method
// in numbers array create an array of multiply all elements with 2
numbers.map(x => x * 2);

// forEach method
// in pizzas array write statements like i like 'pizzas.element'
pizzas.forEach(x => `i like ${x}`);

//splice method
// in cuts array delete second last element of array
cuts.splice(-2, 1);
console.log(cuts);

//reduce methods
//sum of all the numbers array element
numbers.reduce((acc, mov) => acc + mov);