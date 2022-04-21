const prompt = require("prompt-sync")();

let idade = [];
let altura = [];
let mediaIdade;
let mediaAltura;
for (i = 0; i < 5; i++) {
  idade.push(+prompt("DIgite uma idade: "));
  altura.push(+prompt("Digite uma altura (em metros): "));
}

mediaIdade = (idade[0] + idade[1] + idade[2] + idade[3] + idade[4]) / 5;
mediaAltura = (altura[0] + altura[1] + altura[2] + altura[3] + altura[4]) / 5;

console.log(
  `A média das idades é de ${mediaIdade} anos e a média das alturas é de ${mediaAltura}`
);
