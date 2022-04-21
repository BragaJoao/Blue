const prompt = require('prompt-sync')();

const usd = 4.64
let real = prompt('Digite o valor que você deseja converter: ');

console.log (`O valor de R$ ${real}, equivale a USD ${real/usd}`);