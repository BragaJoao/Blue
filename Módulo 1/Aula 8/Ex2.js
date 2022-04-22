const prompt = require("prompt-sync")();

let number;
let fat = 1;

console.log("Que número você deseja saber o fatorial?");
number = +prompt();

for (let i = 1; i <= number; i++) {
  fat = fat * i;
}

console.log(`
O fatorial de ${number} é igual a ${fat}.
`);
