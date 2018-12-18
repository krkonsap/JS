const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

//mängu resetimiseks
const guessReset = document.querySelector('.guessreset');
//

let randomNumber = Math.floor(Math.random()*100)+1;

let guessCount = 1;

const lowOrHighText = 'Viimane pakkumine on ';


const checkGuess = () => {
  /*console.log('Vajutasid nuppu');*/
  let userGuess = Number(guessField.value);
  
  if (guessCount === 1) {
    guesses.textContent = 'Eelmised pakkumised: '
  } 
  
  guesses.textContent += `${userGuess}, `;
  
  if (userGuess === randomNumber) {
    // siis kui sisestatakse õige number
    lastResult.textContent = 'Õige vastus boiii';
    lastResult.style.backgroundColor = 'green';
    lastResult.style.fontSize = '30px';
    lowOrHigh.textContent = '';
    
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else if (guessCount === 10) {
    // kui arvamiste korrad saavad otsa
    lastResult.textContent = 'Kõik. Mäng läbi.';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = '';
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else {
    lastResult.textContent = 'Vale vastus!!';
    lastResult.style.backgroundColor = 'orange';
    
    if(userGuess < randomNumber) {
      //liiga madal
      lowOrHigh.textContent = lowOrHighText + 'liiga madal.';
    } else if (userGuess > randomNumber) {
      //liiga kõrge
      lowOrHigh.textContent = lowOrHighText + 'liiga kõrge.';
    };
  };
  
  guessCount++;
  guessField.value = '';
  guessField.focus();
   
};

//resetimisfunktsioon
const resetimine = () => {
  guessCount.value = 1;
  lowOrHigh.textContent = '';
  guesses.textContent = '';
  lastResult.textContent = '';
  guessField.disabled = false;
  guessSubmit.disabled = false;
};


guessSubmit.addEventListener('click', checkGuess);