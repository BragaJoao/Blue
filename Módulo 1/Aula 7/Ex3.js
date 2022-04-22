const prompt = require("prompt-sync")();

let number = [];


for (let i = 0; i < 20; i++) {
  let sorteio = Math.floor(Math.random() * 101);

  number.push(sorteio);
}

console.log();
number.sort();
console.log(number);
