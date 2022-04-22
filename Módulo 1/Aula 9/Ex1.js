const prompt = require("prompt-sync")();

let array = [];
let number1;
let number2;

console.log("Escolha o primeiro número:");
number1 = +prompt();

console.log("Escolha o segundo número:");
number2 = +prompt();

for (; number1 <= number2; number1++) {
  array.push(number1);
}

console.log(array);
