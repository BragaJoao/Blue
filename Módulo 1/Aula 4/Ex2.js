const prompt = require("prompt-sync")();

function getRandomIntInclusive(min, max) // MDN Web Docs
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberComp = getRandomIntInclusive(0, 10);
console.log(numberComp);
let number;
i = 1;

while (number < 0 || number > 10) {
  number = +prompt("Valor invalido, digite novamente: ");
}
while (number != numberComp) {
  number = +prompt("Tente advinhar: ");
  if (number < numberComp) {
    console.log(' Esse valor é menor que o computador "pensou" ');
    i++;
  } else if (number > numberComp) {
    console.log('Esse valor é maior que o computador "pensou" ');
    i++;
  }
}

console.log("Parabéns, você acertou!");
console.log(`O número de tentativas foi de ${i}.`);
