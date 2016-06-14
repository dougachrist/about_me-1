'use strict';

var userName = prompt('Greetings!!! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Fiona have 1 cat?').toLowerCase();
if(answer1/*.toLowerCase()*/=== 'yes'|| answer1==='y'){
  alert('Right!');
}else{
  alert('Wrong, Fiona actually does not have a pet.');
}
