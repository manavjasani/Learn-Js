const myPenguin = {
    name: 'Captain Cook',
    origin: 'Mr. Popper Penguins',
    author: 'Florence Atwater', 
}

// 1
myPenguin.favouriteFoods = ['vegitable', 'chicken', 'pizza'];

// 2
console.log(myPenguin.favouriteFoods[1]);

// 3
const firstFavFood = myPenguin.favouriteFoods[0];

// 4
myPenguin.favouriteFoods.push('mutton');

// 5
console.log(myPenguin.favouriteFoods.length);

// 6
myPenguin.favouriteFoods[3] = 'pineapples';
console.log(myPenguin);

// 7
var lastFavFood = myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1];
console.log(lastFavFood);

// 8
for (let i = 0; i < myPenguin.favouriteFoods.length; i++) {
    console.log(myPenguin.favouriteFoods[i]);
}