const prompt = require("prompt-sync")();

let linhas;
let colunas;
let matriz = []

console.log('Quantas linhas você deseja na sua matriz?')
linhas = +prompt();

console.log('Quantas colunas você deseja na sua matriz?')
colunas = +prompt();

console.log(`Montaremos uma matriz do tipo: ${linhas}X${colunas}.`)

for(let i = 0; i < linhas; i++ ){
    matriz[i] = []
    for (let j = 0; j < colunas; j++ ){
        matriz[i][j] = '';      
    }
}

for(let l = 0; l < linhas; l++){
    for (let c = 0; c < colunas; c++){
        matriz[l][c] = prompt(`Digite um valor para enserir na matriz: `);
    }
}

let valores = '';
for (let l = 0; l < linhas; l++){
    for (let c = 0; c < colunas; c++){
        if (c < colunas - 1){
            valores += matriz[l][c] + " \t\t";
        } else {
            valores += matriz[l][c] + " \n";
        }
    }
}
console.log(valores)
