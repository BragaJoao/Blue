const prompt = require('prompt-sync')();

console.clear();

let value1 = 12
let value2 = 15

let peca1 = +prompt('Digite o número de peças1 que você deseja: ');
let peca2 = +prompt('Digite o número de peças2 que você deseja: ');

value1 = value1 * peca1
value2 = value2 * peca2

console.log(`O valor total da compra é de R$ ${value1 + value2}`)