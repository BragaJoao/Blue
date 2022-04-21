const prompt = require('prompt-sync')();

let vida = prompt('Digite  a vida do monstro entre 10 e 50: ');
let dano = prompt('Digite o valor de seu ataque entre 5 e 10: ');

let turnos = vida/dano;

console.log(`Você irá derrotar o monstro em ${Math.ceil(turnos)} turnos.`);
