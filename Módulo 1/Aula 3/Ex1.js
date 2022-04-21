const prompt = require("prompt-sync")();

let number1 = +prompt(" Write a number: ");
let number2 = +prompt("Write another number ");

if (number1 > number2) {
  console.log(` The number ${number1} is higher than ${number2}`);
} else if (number1 < number2) {
  console.log(`The number ${number2} is higher than ${number1}`);
} else {
  console.log(`The number ${number1} is equal to ${number2}`);
}
