const prompt = require('prompt-sync')()

let grade1 = +prompt('Write your first grade: ');
let grade2 = +prompt('Write your second grade: ');
let grade3 = +prompt('Write your third grade: ');
let grade4 = +prompt('Write your fourth: ');

finalGrade = (grade1 +grade2 + grade3 + grade4)/4;

if ( finalGrade >= 7 ) {
console.log(`Congratulations, you  have been approved with a final grade of ${finalGrade}` );
} else if ( finalGrade >= 5 ) {
console.log(`Your final grade was ${finalGrade}, you have been appointed to do the "Recuperation" exam`);
} else {
console.log('You have been repproved');
}