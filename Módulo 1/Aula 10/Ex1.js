const prompt = require("prompt-sync")();

let number;

console.log(
  " Digite um número inteiro e natural para verificarmos se ele é primo."
);
number = +prompt();

let primo = false;
const limite = 3;

for (let i = number; i >= 1; i--) {
  if (number == 1) {
    primo = false;
    break;
  } else if (number == 2) {
    primo = true;
    break;
  } else if (number == 3) {
    primo = true;
    break;
  } else if (number % 2 == 0) {
    primo = false;
    break;
  } else if (i <= limite) {
    primo = (number % i) == 0
    break;
  } else if (number == i) {
    continue;
  } 

    primo = (number % i) == 0

}

if (primo) {
  console.log(`O número ${number} é primo.`);
} else {
  console.log(`O número ${number} não é primo.`);
}
