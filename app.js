'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Fiona have 2 cats?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Wrong! Fiona actually does not have a pet!');
} else {
  alert('Right, she does not have a cat.');
}
var answer2 = prompt('Does Fiona speak Spanish?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert('Correct! She has been learning Spanish for a year!');
} else{
  alert('Wrong, ella hablas Espanol.');
}
