const prompt = require('prompt-sync')();

let numberA = +prompt('Write the number A: ')
let numberB = +prompt('Write the number B: ')

remnant = numberA % numberB

if ( remnant == 0 ) {
console.log(`The ${numberA} is a multiple of ${numberB}`);
} else  {
console.log (`The ${numberA} isn't a multiple of ${numberB}`);
} 