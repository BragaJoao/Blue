const prompt = require("prompt-sync")();
console.clear();

console.log(`
BEM VINDO A MINHA LOJA DE CARROS
`);

//Declaração das variáveis:
let variaVeiculos = [];
let variaAutonomia = [];
let dist = [];
let index = 0;
let teste;
let v;

console.log(`
QUANTOS MODELOS  DE CARRO DESEJA CADASTRAR? 
`);
let variaQtd = +prompt();

//Contador utilizando FOR:
for (let i = 0; i < variaQtd; i++) {
  let novoVeic = prompt("INSIRA O MODELO DO VEÍCULO: ");
  let novaAutonomia = +prompt("INSIRA AUTONOMIA EM km/Litros: ");
  // Criei variáveis para receber os valores do prompt:
  variaVeiculos.push(novoVeic);
  variaAutonomia.push(novaAutonomia);
}

console.log("VEÍCULOS CADASTRADOS COM SUCESSO!");
console.log();

console.log(`Foram cadastrados os seguintes veículos: 
${variaVeiculos}`);

console.log(`E a autonomia deles são respectivamente em km/l: 
${variaAutonomia}`);

// Usando o FOR IN para percorrer cada índice dos meu array e fazer uma comparação com IF para pegar o de menor valor.
teste = variaAutonomia[0];

for (let i in variaAutonomia) {
  if (variaAutonomia[i] > teste) {
    teste = variaAutonomia[i];
    index = i;
  }
}

console.log(
  `O modelo de carro mais é econômico é o ${variaVeiculos[index]}, andando de apenas ${variaAutonomia[index]}km para cada litro de gasolina `
);

for (let i in variaAutonomia) {
  v = 1000 / variaAutonomia[i];
  dist.push((v * 5.5).toFixed(2));
  console.log(
    `O carro ${variaVeiculos[i]}, consumindo ${variaAutonomia[i]} com o custo de R$${dist[i]}, percorrendo 1000km.`
  );
}
