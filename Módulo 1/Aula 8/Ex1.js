const prompt = require("prompt-sync")();

const linhas = +prompt('Digite o número de linhas: ');
const colunas = +prompt('Digite o número de colunas: ');

for (let i= 0; i < linhas; i++){
  const numeros = []
  for (j = i; j < i + colunas; j++){
    numeros.push(j);
  }
  console.log(numeros)
}

