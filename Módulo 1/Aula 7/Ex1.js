const prompt = require("prompt-sync")();

let array = [];
let arrayEven = [];
let arrayOdd = [];
let number;

console.log("Digite um número:");
number = +prompt();

for (i = 0; i <= number; i++) {
  array.push(i);
  if (i % 2 == 0) {
    arrayEven.push(i);
  } else {
    arrayOdd.push(i);
  }
}

console.log(array);
console.log(arrayEven);
console.log(arrayOdd);
