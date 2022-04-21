const prompt =  require('prompt-sync')();

let userName = "";
let senha = "";

userName = prompt("Digite seu usuário: ");
senha = prompt("Digite sua senha: ");

while (userName == senha) {
  senha = prompt("Sua senha não pode ser igual ao seu usuário: ");
}

console.log("Cadastro realizado com sucesso");
