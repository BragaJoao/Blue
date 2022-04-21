const prompt = require("prompt-sync")();

let array = [];
let arrayPar = [];
let arrayImpar = [];

for (i = 0; i < 20; i++) {
  console.log(`Digite um número ( ${i} ): `);
  array.push(+prompt());
  if (array[i] % 2 == 0) {
    arrayPar.push(array[i]);
  } else {
    arrayImpar.push(array[i]);
  }
}
console.log(`Os valores do nosso array são: ${array}`);
console.log(`Os valores do nosso arrayPar são: ${arrayPar}`);
console.log(`Os valores do nosso arrayImpar são: ${arrayImpar}`);
