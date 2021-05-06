'use strict';
let score = 0;

let username = prompt('Hi! What is your name?');
alert('Welcome ' + username + '!  Please answer the following questions with yes/no or y/n');

//Question One
function question1(){
  let videoGame = prompt('Is my favorite video game series Kingdom Hearts?').toLowerCase();

  if(videoGame === 'yes' || videoGame === 'y'){
   // console.log('You are correct! Sanctuary is also the best song ever made. You should listen to it');
   alert('You are correct! Sanctuary is also the best song ever made. You should listen to it');
    score++;
  }

  else if(videoGame === 'no' || videoGame === 'n'){
    alert('Incorrect, it\'s my favorite series of all time.');
  }

  else{
    alert('Pretty sure I asked you to answer yes or no.');
  }
}
question1();

//Question Two
function question2(){
  let hometown = prompt('Is my hometown Whittier,CA?').toLowerCase();

  if(hometown === 'yes' || hometown === 'y'){
    // console.log('You are correct! I do miss it sometimes');
    alert('You are correct! I do miss it sometimes');
    score++;
  }

  else if(hometown === 'no' || hometown === 'n'){
    alert('Sorry, that\'s wrong. I am from Whittier, CA.');
  }

  else{
    alert('Pretty sure I asked you to answer yes or no.');
  }
}
question2();

// Question Three
function question3(){
  let joinedArmy = prompt('Did I join the Army at 20?').toLowerCase();

  if(joinedArmy === 'no' || joinedArmy === 'n'){
    // console.log('You are correct! I joined at 18');
    alert('You are correct! I joined at 18');
    score++;
  }

  else if(joinedArmy === 'yes' || joinedArmy === 'y'){
    alert('Nope, I was already in Afghanistan at 20');
  }

  else{
    alert('Pretty sure I asked you to answer yes or no.');
  }
}
question3();

//Question Four
function question4(){
  let dream = prompt('Do I want to teach kids how to code?').toLowerCase();

  if(dream === 'yes' || dream === 'y'){
    // console.log('Yup! I love teaching kids new things and helping people in need.');
    alert('Yup! I love teaching kids new things and helping people in need.');
    score++;
  }

  else if(dream === 'no' || dream === 'n'){
    alert('Of course I want to. It\'s my most desired goal.');
  }

  else{
    alert('Pretty sure I asked you to answer yes or no.');
  }
}
question4();

//Question Five
function question5(){
  let pizza = prompt('Does pineapple belong on pizza? Look at the page closely').toLowerCase();

  if(pizza === 'no' || pizza === 'n'){
    // console.log('Exactly! Glad to see you aren\'t a heathen');
    alert('Exactly! Glad to see you aren\'t a heathen');
    score++;
  }

  else if(pizza === 'yes' || pizza === 'y'){
    alert('How do you live with yourself?');
  }

  else{
    alert('Pretty sure I asked you to answer yes or no.');
  }
}
question5();

// Question 6
function question6(){
  let numberOfGames = '17';
  let attemptsRemaining = 4;
  let answeredCorrectly = false;

  while (attemptsRemaining && !answeredCorrectly){

    let kingdomHearts = prompt(`How many games does the Kingdom Hearts series have? You have ${attemptsRemaining} attempts`);
    attemptsRemaining--;

    if (kingdomHearts === numberOfGames){
      // console.log(`you guessed ${kingdomHearts}. That is correct and they are all amazing. (Except for Chain of Memories) You had $  {attemptsRemaining} attempts remaining.`);
      alert(`you guessed ${kingdomHearts}. That is correct and they are all amazing. (Except for Chain of Memories) You had $ {attemptsRemaining} attempts remaining.`);
      answeredCorrectly = true;
      score++;
    }

    else if (kingdomHearts < numberOfGames){
      // console.log(`you guessed ${kingdomHearts}. That is too low. You have ${attemptsRemaining}.`);
      alert(`you guessed ${kingdomHearts}. That is too low. You have ${attemptsRemaining} attempts remaining.`);
    }

    else if (kingdomHearts > numberOfGames){
      // console.log(`you guessed ${kingdomHearts}. That is too high. You have ${attemptsRemaining}.`);
      alert(`you guessed ${kingdomHearts}. That is too high. You have ${attemptsRemaining}attempts remaining.`);
    }

    else {
      // console.log(`Please enter a number. You have ${attemptsRemaining}.`);
      alert(`Please enter a number. You have ${attemptsRemaining}attempts remaining.`);
    }
  }
  if (attemptsRemaining === 0 && !answeredCorrectly){
    // console.log('Nice try, The correct answer is 17 and I have played them all.');
    alert('Nice try, The correct answer is 17 and I have played them all.');
  }
}
question6();

// Question 7
function question7(){
  let guesses = 6;
  let guessedCorrectly = false;
  let classes = ['warlock', 'barbarian', 'wizard', 'rogue', 'paladin', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'ranger',  'sorcerer'];

  while (guesses && !guessedCorrectly){
    let userInput = prompt(`Name a class that you can play as in Dungeons and Dragons. You have ${guesses}.`).toLowerCase();
    guesses--;

    for (let i = 0; i < classes.length; i++){
      if (userInput === classes[i]){
        guessedCorrectly = true;
      }
    }
  }

  if (guessedCorrectly){
    // console.log(`Correct! All the classes are: ${classes} . My favorite to play is a Rogue.`);
    alert(`Correct! All the classes are: ${classes} . My favorite to play is a Rogue.`);
    score++;
  }
  else {
    // console.log(`Aw man, nice try. All the classes are: ${classes}.`);
    alert(`Aw man, nice try. All the classes are: ${classes}.`);
  }
}
question7();

// This can be used to replace lines 130-132
// guessedCorrectly = userInput === classes[i] || guessedCorrectly;

// Final Message
alert(`Thanks for playing ${username}. You're score was ${score}. Always remember: If the first step is the hardest, start with a walk in the park.`);
