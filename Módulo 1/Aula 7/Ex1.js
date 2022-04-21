const prompt = require('prompt-sync')();

let number
let array = []
let numberPar = []
let numberImpar = []
let i=0;

number = +prompt('Digite um número que você deseja: ');

while ( i < number + 1){
array.push(i);
if ( i % 2 == 0){
   numberPar.push(i);
 } else {
   numberImpar.push(i);
 }
} 

console.log(`Array : ${array}.`);
console.log(`Números pares: ${numberPar}.`);
console.log(`Números Ímpares: ${numberImpar}.`);
