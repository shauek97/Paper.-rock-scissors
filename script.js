const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');
const submitBtn = document.querySelector('#submit');
const resetBtn = document.querySelector('#reset');
const result = document.querySelector('#result');
const choices = [scissors, rock, paper];

function removingActiveClass(){
  for (let choice of choices){
    if (choice.classList.contains('box-active')){
    choice.classList.remove('box-active');
    };
  };
};

function randomIntFromInterval(){
  const min = 1;
  const max = 3;
  const randomNumber =  Math.floor(Math.random() * (max - min + 1) + min);
  
   if(randomNumber === 1){
    return 'scissors';
  };
  if(randomNumber === 2){
    return 'rock';
  };
  if(randomNumber === 3){
    return 'paper';
  };
};

function submitHandler (){
  computerChoice.innerHTML = (randomIntFromInterval());
  console.log(computerChoice)
  console.log(playerChoice)
  if(playerChoice.innerHTML === 'paper' && computerChoice.innerHTML === 'scissors'){
   return(result.innerHTML = "You've lost");
  }
  
  if(playerChoice.innerHTML === 'scissors' && computerChoice.innerHTML === 'rock'){
   return(result.innerHTML = "You've lost");
  }
  
  if(playerChoice.innerHTML === 'rock' && computerChoice.innerHTML === 'paper'){
   return(result.innerHTML = "You've lost");
  }
  
  if(playerChoice.innerHTML === computerChoice.innerHTML ){
   return(result.innerHTML = 'Draw.');
  }
  
  else {
    return(result.innerHTML = "You won");
  };
};

function resetHandler () {
  for(let choice of choices){
    choice.classList.remove('box-active');
  };
  computerChoice.innerHTML = '';
  playerChoice.innerHTML = '';
  result.innerHTML = ''; 
};

scissors.addEventListener('click', function(){
  removingActiveClass(); 
  scissors.classList.add('box-active');
  const scissorsId = scissors.getAttribute('id');
  playerChoice.innerHTML = (scissorsId);
});

rock.addEventListener('click', function(){
  removingActiveClass(); 
  rock.classList.add('box-active');
  const rockId = rock.getAttribute('id');
  playerChoice.innerHTML = (rockId);
});

paper.addEventListener('click', function(){
  removingActiveClass(); 
  paper.classList.add('box-active');
  const paperId = paper.getAttribute('id');
  playerChoice.innerHTML = (paperId);
});

submitBtn.addEventListener('click', function(){
  submitHandler();
});
resetBtn.addEventListener('click', function(){
  resetHandler();
});
                        


