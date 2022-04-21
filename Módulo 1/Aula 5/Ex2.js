const prompt = require("prompt-sync")();

let name;
let age;
let salary;
let maritalStatus;

name = prompt("Digite seu nome: ");
while (name.length <= 3) {
  name = prompt("Seu nome deve conter mais que 3 caractéres: ");
}

age = +prompt("Digite sua idade: ");
while (age < 0 || age > 150) {
  age = +prompt("Digite sua idade: ");
}

salary = +prompt("Digite seu salário: ");
while (salary < 0) {
  salary = +prompt("Digite seu salário: ");
}

maritalStatus = prompt(`Digite seu estado civil:
 
[s] Para solteiro;
[c] Para casado;
[v] Para viúvo;
[d] Para divorciado;

`);
while (
  maritalStatus != "s" &&
  maritalStatus != "c" &&
  maritalStatus != "v" &&
  maritalStatus != "d"
) {
  maritalStatus = prompt("Digite seu estado civil: ");
}

console.log(`Seu nome é: ${name}.`);
console.log(`Sua idade é de${age} anos.`);
console.log(`Você tem um salário de: ${salary}.`);
console.log(`Seu estado civil é : ${maritalStatus}.`);
