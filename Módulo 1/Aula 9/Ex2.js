const prompt = require("prompt-sync")();

let x = 0;
let arrayImpar = [];

console.log("Digite um número inteiro: ");
x = +prompt();
x = x.toFixed(0);

for (let i = 1; i <= x; i++) {
  if (i % 2 != 0) {
    arrayImpar.push(i);
  }
}

console.log(arrayImpar);
