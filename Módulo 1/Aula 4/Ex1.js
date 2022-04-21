const prompt = require("prompt-sync")();

let percentual = "";
let salarioFinal = 0;
salario = +prompt("Digite seu salário no formato XXX.XX : ");

while (salario <= 0) {
  console.log("Valor inválido");
  salario = +prompt("Digite seu salário novamente: ");
}

if (salario <= 280.0) {
  salarioFinal = salario * 1.2;
  percentual = "20%";
} else if (salario <= 700.0) {
  salarioFinal = salario * 1.15;
  percentual = "15%";
} else if (salario <= 1500.0) {
  salarioFinal = salario * 1.1;
  percentual = "10%";
} else if (salario > 1500.0) {
  salarioFinal = salario * 1.05;
  percentual = "5%";
}

console.log(` Seu salário antes do reajuste é de: R$ ${salario}
seu reajuste percentual de reajuste é de: ${percentual}
O valor de aumento é de: ${Math.round(salarioFinal - salario)} 
Seu novo salário é: ${Math.round(salarioFinal)}
`);
