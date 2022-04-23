const prompt = require("prompt-sync")();
//Faça um programa que peça ao usuário digitar a população e a taxa de crescimento 
//populacional de 2 países A e B, sendo que a população do país A deve ser menor que
// a de B, e a taxa de crescimento de A seja maior. Faça um programa que calcule e 
//escreva o número de anos necessários para que a população do país A ultrapasse ou 
//iguale a população do país B, mantidas as taxas de crescimento.

let populaçaoA
let populaçaoB
let txcrescimentoA
let txcrescimentoB
let crescimentoA
let crescimentoB
// Definindo a população de cada país
populaçaoA = +prompt(' Digite a população A (XX milhões)');
populaçaoB = +prompt(' Digite a população B (XX milhões)');
while (populaçaoA > populaçaoB){
    console.log('A população de A deve ser menor que a de B.')
    populaçaoB = +prompt();
}
// Definindo os crescimento de cada um.
txcrescimentoA = +prompt('Digite a taxa de crescimento populacional do país A ao ano.')
txcrescimentoB = +prompt('Digite a taxa de crescimento populacional do país B ao ano.')
while(txcrescimentoA < txcrescimentoB){
    console.log('A taxa de crecimento do país A deve ser maior do que de B.')
    txcrescimentoB = +prompt();
}

for (let i = 1; populaçaoA < populaçaoB; i++){
    crescimentoA = populaçaoA * txcrescimentoA;
    crescimentoB = populaçaoB * txcrescimentoB;
    if( crescimentoA > crescimentoB){
        console.log(`O país A ultrapassara a população do país B em ${i} anos`);
        break
    }
}


