const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let randomNumber = Math.floor(Math.random()*100)+1;

let guessCount = 1;

const checkGuess = () => {
  /*console.log('Vajutasid nuppu');*/
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guesses.textContent = 'Eelmised pakkumised: '
  } 
  
  guesses.textContent += `${userGuess}, `;
  
  if (userguess === randomNumber) {
    // siis kui sisestatakse õige number
  } else if (guessCount === 10) {
    // kui arvamiste korrad saavad otsa
  } else {
    if(userGuess < randomNumber) {
      //liiga madal
    } else if (userGuide > randomNumber) {
      //liiga kõrge
    };
  };
  
  guessCount++;
};

guessSubmit.addEventListener('click', checkGuess);