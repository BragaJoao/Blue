const prompt = require('prompt-sync');

let number1 = +prompt('Choose a number: ');

remnant = number1 % 2

if ( remnant == 0 ) {
console.log('The number is even');
} else  {
console.log ('The number is odd');
}