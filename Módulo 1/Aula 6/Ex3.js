const prompt = require("prompt-sync")();

let alunos = [];
let notas = [];let quantidade;
let i = 0;
let j = 0;
let media = 0;

quantidade = +prompt("Quantos alunos temos em sua sala? ");

while (i < quantidade) {
  i++;
  alunos.push(prompt("Digite o NOME do aluno: "));
  notas.push(+prompt("Digite a NOTA do aluno: "));
}

console.log("A seguir a tabela de cada aluno com sua respectiva nota: ");

while (j < quantidade) {
  console.log(alunos[j], notas[j]);
  media = media + notas[j];
  j++;
}
console.log(`A média da sala é ${media / quantidade}`);
