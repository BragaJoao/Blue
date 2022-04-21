const prompt = require("prompt-sync")();
console.clear();

console.log("BEM VINDO A MINHA LOJA DE CARROS");
console.log();

//Declaração das variáveis:
let variaVeiculos = [];
let variaAutonomia = [];
let listaVeic = [[], []];
let index;
let teste;

let variaQtd = +prompt("QUANTOS MODELOS  DE CARRO DESEJA CADASTRAR? ");
console.log();

//Contador utilizando FOR:
for (let i = 0; i < variaQtd; i++) {
  let novoVeic = prompt("INSIRA O MODELO DO VEÍCULO: ");
  let novaAutonomia = +prompt("INSIRA AUTONOMIA EM kmLitros: ");
  // Criei variáveis para receber os valores do prompt:
  variaVeiculos.push(novoVeic);
  variaAutonomia.push(novaAutonomia);
  //Criei uma variável para receber as listas separadas por indice:
}

console.log("VEÍCULOS CADASTRADOS COM SUCESSO!");
console.log();

console.log(variaVeiculos);
console.log(variaAutonomia);

// Usando o FOR IN para percorrer cada índice dos meus arrays e fazer uma comparação com IF para pegar o de menor valor.
teste = variaAutonomia[0];

for (let i in variaAutonomia) {
  if (variaAutonomia[i] < teste) {
    teste = variaAutonomia[i];
    index = i;
  }
}

console.log(
  `O modelo de carro mais é econômico é o ${variaVeiculos[index]}, com uma economia de apenas ${variaAutonomia[index]} km/L `
);
