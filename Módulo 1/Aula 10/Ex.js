const prompt = require("prompt-sync")();


let number
let count = 0

console.log('Digite um número');
number = +prompt('');

for (i=1; i <= number; i++){
   
    if( (number % i) == 0 ){
    count++;
    }
}

if (count == 2){
    console.log(`O número ${number} é primo`);
} else {
    console.log(`O número ${number} não é primo`);
}