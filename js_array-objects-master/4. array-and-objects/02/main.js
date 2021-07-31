var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  var myPenguin = {
    name: 'Captain Cook',
    origin: 'Mr. Popper Penguins',
    canFly: true,
    sayHello: function () {
      console.log("Hi there!");
    }
    };


// 1
const penguins = [gunter, ramon, fred];

// 2
for (let key in gunter) {
    console.log(`${key}: ${gunter[key]}`);
}

// 3
const secondPenguin = penguins[1];

// 4
console.log(penguins[penguins.length - 1]);

// 5
penguins.push(myPenguin);
console.log(penguins);

// 6
console.log(penguins.length);

// 7
penguins[0].canFly = true;
console.log(penguins[0]);

// 8
penguins[0].sayHello();

// 9
for (let key in penguins) {
    console.log(penguins[key].name);
}

// 10
for (let key in penguins) {
    penguins[key].sayHello();
}

// 11
for (let key in penguins) {
    penguins[key].numberOfFeet = 2;
}
console.log(penguins);

// 12
for (let i = 0; i < penguins.length; i++) {
    if(penguins[i].canFly) {
        console.log(`${penguins[i].name} can fly!`);
    }
}