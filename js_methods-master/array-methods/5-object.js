// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)

let keys = Object.keys(myObject);
let values = Object.keys(myObject).map(key => myObject[key]);


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};

console.log(student);

const prop = 'rollno';
delete student[prop];

console.log(student);


// 3. Write a function to get the length of an object.

const objectLength = function(obj) {
  return Object.keys(obj).length;
}
