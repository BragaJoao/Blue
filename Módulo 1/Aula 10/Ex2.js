const prompt = require("prompt-sync")();

let names = [];
let names2 = [];
let nNames;
let variavel = [];
let contador1 = 0;
let contador2 = 0;

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
let teste1 = 0
let teste2 = 999
for (let i in names2){
  contador1 = 0 
  for (let j=0; j < names2[i].length; j++){
    contador1++
  }

  if( contador1 > teste1){
    teste1 = contador1
  }
  if (contador1 < teste2){
    teste2 = contador1
  } 
}
console.log(teste1)
console.log(teste2)