const prompt = require("prompt-sync")();

/* O programa deve pedir qt notas finais
   Armazenalas em um array finais 
   qt de alunos aprovados >= 7
   qt recuperação >= 5
   qt reprovados < 5
*/

let medias = [];
let nomes = [];
let notas = [];
let amount;
let students;
let media = 0;

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

  notas.splice(0,amount);
  media = 0
}

console.log(nomes);
console.log(medias);
