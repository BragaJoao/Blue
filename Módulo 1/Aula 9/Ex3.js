const prompt = require("prompt-sync")();

let lista = [];
let index1;
let index2;
let menor;
let maior;
let n;

console.log("Quantos números você deseja na sua lista?");
n = +prompt();
n = n.toFixed(0);

for (i = 0; i < n; i++) {
  console.log(`Digite o ${i + 1}º número da sua lista:`);
  lista.push(+prompt());
}

lista.sort();

console.log(`
O menor valor da lista é ${lista[0]}
Enquanto o mair é ${lista[n - 1]}
A soma deles é de ${lista[0] + lista[n - 1]}
`);
