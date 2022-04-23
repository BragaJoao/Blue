const prompt = require("prompt-sync")();

let names = [];
let names2 = [];
let nNames;
let variavel = "";

console.log("Digite a quantidade de nomes desejadas: ");
nNames = +prompt();

for (let i = 0; i < nNames; i++) {
  names.push(prompt("Digite o nome: "));
}

for (let i = 0; i < nNames; i++) {
  let variavel = names.pop();
  names2.push(variavel);
}

console.log(names2);
