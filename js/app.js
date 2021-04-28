'use strict';
let username = prompt('Hi! What is your name?');
alert('Welcome ' + username + '!  Please answer the following questions with yes/no or y/n');

//Question One
let videoGame = prompt('Is my favorite video game series Kingdom Hearts?').toLowerCase();

if(videoGame === 'yes' || videoGame === 'y'){
  console.log('You are correct! Sanctuary is also the best song ever made. You should listen to it');
  alert('You are correct! Sanctuary is also the best song ever made. You should listen to it');
}

else if(videoGame === 'no' || videoGame === 'n'){
  alert('Nope, go back and read');
}

else{
  alert('Pretty sure I asked you to answer yes or no.');
}

//Question Two
let hometown = prompt('Is my hometown Whittier,CA?').toLowerCase();

if(hometown === 'yes' || hometown === 'y'){
  console.log('You are correct! I do miss it sometimes');
  alert('You are correct! I do miss it sometimes');
}

else if(hometown === 'no' || hometown === 'n'){
  alert('Nope, go back and read');
}

else{
  alert('Pretty sure I asked you to answer yes or no.');
}

// Question Three
let joinedArmy = prompt('Did I join the Army at 20?').toLowerCase();

if(joinedArmy === 'no' || joinedArmy === 'n'){
  console.log('You are correct! I joined at 18');
  alert('You are correct! I joined at 18');
}

else if(joinedArmy === 'yes' || joinedArmy === 'y'){
  alert('Nope, go back and read');
}

else{
  alert('Pretty sure I asked you to answer yes or no.');
}

//Question Four
let dream = prompt('Do I want to teach kids how to code?').toLowerCase();

if(dream === 'yes' || dream === 'y'){
  console.log('Yup! I love teaching kids new things and helping people in need.');
  alert('Yup! I love teaching kids new things and helping people in need.');
}

else if(dream === 'no' || dream === 'n'){
  alert('Nope, go back and read');
}

else{
  alert('Pretty sure I asked you to answer yes or no.');
}


//Question Five
let pizza = prompt('Does pineapple belong on pizza? Look at the page closely').toLowerCase();

if(pizza === 'no' || pizza === 'n'){
  console.log('Exactly! Glad to see you aren\'t a heathen');
  alert('Exactly! Glad to see you aren\'t a heathen');
}

else if(pizza === 'yes' || pizza === 'y'){
  alert('How do you live with yourself?');
}

else{
  alert('Pretty sure I asked you to answer yes or no.');
}

//Final Message
alert('Thanks for playing ' + username + '. Always remember: If the first step is the hardest, start with a walk in the park.');
