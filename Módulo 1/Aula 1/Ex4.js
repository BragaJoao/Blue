const prompt = require("prompt-sync")();

let days;
let months;
let years;
let number;
let number2;
let number3;

console.log("Digite quantos dias você viveu até hoje:");
number = +prompt();

days = number % 30;
number2 = number - days;
number2 = number2 / 30;

months = number2 % 12;
number2 = number2 - months;
years = number2 / 12;

console.log(
  `Você tem uma idade de: ${years} anos, ${months} meses e ${days} dias.`
);
