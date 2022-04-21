const prompt = require("prompt-sync")();

let years;
let months;
let days;

console.log("Digite quanto anos você tem: ");
years = +prompt();
console.log("Digite quantos meses você tem: ");
months = +prompt();
console.log("Digite quantos dias você tem: ");
days = +prompt();

years = years * 365;
months = months * 30;

console.log(
  `O seu número total de dias ao longo da sua vida é de: ${
    years + months + days
  } `
);
