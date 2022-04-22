const prompt = require("prompt-sync")();

let medias = [];
let nomes = [];
let notas = [];
let amount;
let students;
let media = 0;
let somaA = 0;
let somaB = 0;
let somaC = 0;

console.log("Digite a quantidade de alunos:");
students = +prompt();

console.log("Digite a quantidade de provas:");
amount = +prompt();

for (let i = 0; i < students; i++) {
  console.log(`Digite o nome do ${i + 1}º aluno: `);
  nomes.push(prompt());

  for (let j = 0; j < amount; j++) {
    console.log(`Digite a ${j + 1}ª nota: `);
    notas.push(+prompt());
    media = media + notas[j];
  }
  medias.push((media / amount).toFixed(1));

  notas.splice(0, amount);
  media = 0;
}

for (let i = 0; i < students; i++) {
  if (medias[i] >= 7) {
    console.log(`${nomes[i]} foi APROVADO(A) com nota ${medias[i]}.`);
    somaA++;
  } else if (medias[i] >= 5) {
    console.log(`${nomes[i]} ficou de RECUPERAÇÃO com nota ${medias[i]}.`);
    somaB++;
  } else {
    console.log(`${nomes[i]} foi REPROVADO(A]) com nota ${medias[i]}.`);
    somaC++;
  }
}
console.log(`
O Total de alunos APROVADOS foi de: ${somaA}.
O Total de alunos de RECUPERAÇÃO foi de: ${somaB}.
O Total de alunos REPROVADOS foi de: ${somaC}
`);
