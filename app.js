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
