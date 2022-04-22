const prompt = require("prompt-sync")();

let authentication;
let p;

do {

  p = prompt("Digite sua senha: ");

  function validatePassword(p) {
    //var p = document.getElementById('newPassword').value,
    const errors = [];
    if (p.length < 8) {
      errors.push("Your password must be at least 8 characters");
    }
    if (p.length > 32) {
      errors.push("Your password must be at max 32 characters");
    }
    if (p.search(/[a-z]/) < 0) {
      errors.push("Your password must contain at least one lower case letter.");
    }
    if (p.search(/[A-Z]/) < 0) {
      errors.push("Your password must contain at least one upper case letter.");
    }

    if (p.search(/[0-9]/) < 0) {
      errors.push("Your password must contain at least one digit.");
    }
    if (p.search(/[!@#\$%\^&\*_]/) < 0) {
      errors.push(
        "Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"
      );
    }
    if (errors.length > 0) {
      console.log(errors.join("\n"));
      return false;
    }
    return true;
  }

  authentication = validatePassword(p);
} while (authentication == false);

console.log(`
Senha cadastrada com sucesso!
`);
