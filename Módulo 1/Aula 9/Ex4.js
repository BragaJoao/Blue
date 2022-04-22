const prompt = require("prompt-sync")();

let candidatos = ["Joao", "Maria", "Isabela"];
let eleitores;
let votos;
let j = 0;
let m = 0;
let s = 0;

console.log("Digite o númeor de pessoas que irão votar: ");
eleitores = +prompt();
// Aqui vamos dar entradas aleatórias nos votos para simular a Eleição.

for (let i = 0; i < eleitores; i++) {
  votos = candidatos[Math.floor(Math.random() * 3)];
  if (votos == "Joao") {
    j++;
  } else if (votos == "Maria") {
    m++;
  } else {
    s++;
  }
}
console.log(`
O número de votos para João foi de ${j}
O número de votos para Maria foi de ${m}
O número de votos para Isabela foi de ${s}
`);
