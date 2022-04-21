const prompt = require('prompt-sync')();

let number1
let remnant

     number1 = +prompt('Digite um número par: ');
     remnant = number1 % 2;
     
    while (remnant != 0) {
     console.log(`O número ${number1} é impar, digite um número par`);
     number1 = +prompt();
     remnant = number1 % 2;
     
} 
console.log(`O número ${number1} é par. `);