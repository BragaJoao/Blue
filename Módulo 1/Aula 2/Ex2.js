const prompt = require('prompt-sync')();

let nome = ' Nome';
let sobrenome = 'Sobrenome';
let end = 'Endereço';
let cep = 'CEP';
let tel = 'telefone';

nome = prompt('Digite seu nome: ');
sobrenome = prompt('Digite seu sobrenome: ');
end = prompt('Digte seu endereço: ');
cep = prompt('Digite seu CEP no formato (XXX.XXX.XXX-XX): ');
tel = prompt('Digite seu telefone: ');

console.log( `Seu nome completo é : ${nome} ${sobrenome}
Seu endereço é: ${end}
Seu CEP é : ${cep}
E seu número de telefone é : ${tel}`)