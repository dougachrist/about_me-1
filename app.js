'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Fiona have cats?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Wrong! Fiona actually does not have a pet!');
} else {
  alert('Right, she does not have a cat.');
}
var answer2 = prompt('Does Fiona speak Spanish?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct! She has been learning Spanish for a year!');
} else{
  alert('Wrong, ella habla Espanol.');
}
var answer3 = prompt('Can she read people\'s mind?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('Nehhh... She studies pscyhology but she has no idea what you are thinking about.');
} else{
  alert('True, but she would want to know how to do that.');
}
var answer4 = prompt('Has she ever donated blood?').toLowerCase();
if (answer4 === 'yes' || answer3 === 'y') {
  alert('Right, and guess what happened? She fainted afterwards...');
} else{
  alert('Wrong! She donated for the first time on her 22nd birthday!');
}
var answer5 = prompt('Does she have a sibiling?').toLowerCase();
if (answer5 === 'yes' || answer3 === 'y') {
  alert('Correct! She has a sister who is working in Shanghai.');
} else{
  alert('Wrong! She has a sister that is 4 years older than her.');
}

var answer6 = parseInt(prompt('What is her lucky number?'));
var i = 0;
while (answer6 !== 6 && i < 4){
  if (answer6 < 6){
    alert ('Too low!');
  }
  else if (answer6 > 6){
    alert('Too high!');
  }
  i++;
  answer6 = parseInt(prompt('What is her lucky number?'));
}
if (i >= 4 ){
  alert('Too many tries.');

}
if (answer6 === 6){
  alert('Good guess!');
}
var possibleAns = ['Palm Springs','Las Vegas','Tijuana','Zoo','Home','Santa Monica','Cancun','Disneyland','Universal Studios'];
var i = 0;
while (i < 6){
  var answer7 = prompt('Where did she celebrate her 22nd birthday?');
  for (var j = 0; j < possibleAns.length; j++){
    if (answer7 === possibleAns[j]) {
      alert('Thats right!');
      var i = 10;
      break;
    }
  }
  i++;
  if (i >= 6){
    alert('You have no more tries');
  }
var correctAns = 0;
var i = 0;
for (i=0; i <= 7; i++ ){
  if (answer1.toLowerCase === 'yes' || answer1 === 'y') {
    correctAns = correctAns + 1;}
  if (answer2.toLowerCase === 'yes' || answer1 === 'y') {
    correctAns = correctAns + 1;}
  if (answer3.toLowerCase === 'yes' || answer1 === 'y') {
      correctAns = correctAns + 1;}
  if (answer4.toLowerCase === 'yes' || answer1 === 'y') {
      correctAns = correctAns + 1;}
  if (answer5.toLowerCase === 'yes' || answer1 === 'y') {
      correctAns = correctAns + 1;}
  if (answer6 === 6){
      correctAns = correctAns + 1;}
  if (answer7 === possibleAns[j]) {
      correctAns = correctAns + 1;}
      break;
}
 msg = 'You got' + correctAns+ 'out of 7 questions correct'+ userName+ '! Better luck next time!';
