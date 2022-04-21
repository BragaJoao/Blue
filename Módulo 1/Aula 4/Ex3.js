const prompt = require("prompt-sync")();

let value = prompt("Digite quanto você quer sacar entre 10 e 600 reais: ");
let valueF;
i = 0;
j = 0;
k = 0;
l = 0;
m = 0;

while (value < 10 || value > 600) {
  let value = prompt("Valor inválido, digite novamente: ");
}

valueF = value;

while (valueF != 0) {
  if (valueF >= 100) {
    valueF = valueF - 100;
    i++;
  } else if (valueF >= 50) {
    valueF = valueF - 50;
    j++;
  } else if (valueF >= 10) {
    valueF = valueF - 10;
    k++;
  } else if (valueF >= 5) {
    valueF = valueF - 5;
    l++;
  } else if (valueF >= 1) {
    valueF = valueF - 1;
    m++;
  } else if (value == 0) {
    break;
  }
}

console.log(
  ` Para sacar a quantia de ${value} reais, o programado fornece ${i} notas de R$100, ${j} notas de 50, ${k} notas de 10, ${l} notas de 5 e ${m} notas de 1.`
);
