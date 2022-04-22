const prompt = require("prompt-sync")();

let number;
let tabuada;

console.log("Que número você deseja saber a tabuada?");
number = +prompt();

for (let i = 1; i <= 10; i++) {
  tabuada = i * number;
  console.log(`${number} x ${i} = ${tabuada}`);
}
