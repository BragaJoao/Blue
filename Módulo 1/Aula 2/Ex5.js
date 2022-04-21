console.log("Olá, vamos iniciar se cadastro");

console.log()

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");
let end = prompt("Digite seu endereço: ");
let cep = prompt("Digite seu CEP: ");
let tel = prompt("Digite seu telefone: ");

let resposta = prompt(
  "Você gostaria de fazer a assinatura do plano Standart, Noble ou Royal?"
);

console.log(`Parabéns, você adquiriu o plano ${resposta} com sucesso`);
