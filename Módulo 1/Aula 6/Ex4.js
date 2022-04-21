const prompt = require("prompt-sync")();

function getRandomIntInclusive(min, max) {
  // MDN Web Docs
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dados = [];
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;
let contador5 = 0;
let contador6 = 0;
i = 0;
j = 0;

while (i < 100) {
  i++;
  let dado = getRandomIntInclusive(1, 6);
  dados.push(dado);
}

while (j < 100) {
  if (dados[j] == 1) {
    contador1 = contador1 + 1;
  } else if (dados[j] == 2) {
    contador2++;
  } else if (dados[j] == 3) {
    contador3++;
  } else if (dados[j] == 4) {
    contador4++;
  } else if (dados[j] == 5) {
    contador5++;
  }
  if (dados[j] == 6) {
    contador6++;
  }
  j++;
}

console.log(`A quantidade de elementos de valor 1 presente é de: ${contador1}`);
console.log(`A quantidade de elementos de valor 2 presente é de: ${contador2}`);
console.log(`A quantidade de elementos de valor 3 presente é de: ${contador3}`);
console.log(`A quantidade de elementos de valor 4 presente é de: ${contador4}`);
console.log(`A quantidade de elementos de valor 5 presente é de: ${contador5}`);
console.log(`A quantidade de elementos de valor 6 presente é de: ${contador6}`);
