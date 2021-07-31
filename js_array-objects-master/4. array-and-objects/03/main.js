// 1
var myPenguin = {
    name: 'Captain Cook',
    origin: 'Mr. Popper Penguins',
    canFly: true,
    sayHello: function () {
      console.log("Hi there!");
    }
};
myPenguin.outfit = {
    hat: 'baseball cap',
    shirt: 'Hawaiian shirt',
    pants: 'cargo shorts',
    shoes: 'flip-flops'
}

// 2
const penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

// 3
myPenguin.outfit.accessory = "pocket watch";

// 4
myPenguin.outfit.hat = 'top hat';

// 5
delete myPenguin.outfit.pants;
console.log(myPenguin);

// 6
for (let key in myPenguin.outfit) {
    console.log(`${key} : ${myPenguin.outfit[key]}`);
}