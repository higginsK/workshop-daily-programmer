//05 Up Down Problem
var input = [6,3,5,4,3,4,4,5];
//defines the input
function upDownFunc(input){
  //defined function
  var answers = [];
//made an empty array called answers so I can push to it
  for (var i = 0; i < 20; i++) {
    //for each of the numbers set a variable before the loop starts (var i = 0),
    //then define the condition for the loop to run (i must be less than...to avoid infinite looping).
    //(i++) increases the value each time the code block in the loop has been executed.
    if (input[i] > input[i - 1]) {
      answers.push('Up');
   //if for input i, it's greater than input of i minus one, call it UP

    } else if (input[i] === input[i - 1]) {
    answers.push('Even');
    //if for input i, it's EQUAL to input of i minus one, call it EVEN

    } else if (input[i] < input[i - 1]) {
      answers.push('Down');
    //if for input i, it's LESS THAN to input of i minus one, call it DOWN
    }
  }
  console.log(answers);
}

upDownFunc(input);
console.log(answers);
