let questionDiv = document.getElementById('question');
let answer = document.getElementById('answer');
let btn = document.getElementById('btn');
let modal = document.getElementById('modal');
let startBtn = document.getElementById('start');
let questionP = document.getElementById('q');

let ask = [
  {
    question: 'Where does Aladdin live?',
    answer: 'Agrabah'
  },
  {
    question: 'What color is the sky?',
    answer: 'Blue'
  },
  {
    question: 'What color is the grass?',
    answer: ''
  }
]

let score= document.getElementById('score');
let scoreNb = 0;
let number = 0;

let modalHeader = document.getElementById('modal-header');
let headerH2 = modalHeader.querySelector('h2');
let correction = document.getElementById('correction');

function startGame() {
  questionDiv.style.display = 'block';
  answer.style.display = 'block';
  btn.style.display = 'block';
  startBtn.style.display = 'none';
  questionP.innerHTML = ask[number].question;
  score.innerHTML = scoreNb;
}

function nextQuestion() {
  if(answer.value === ask[number].answer) {
    scoreNb++;
    number++;
    score.innerHTML = scoreNb;
    questionP.innerHTML = ask[number].question;
    answer.value = '';
  } else if (number ===2) {
    finalQuestion();
  } else {
    number++;
    questionP.innerHTML = ask[number].question;
    answer.value = '';
  }
}

function finalQuestion(){
  if(answer.value === 'Green') {
    scoreNb++;
    endGame();
  } else {
    endGame();
  }
}

function endGame() {
  modal.style.display = 'block';
  headerH2.innerHTML = 'Results';
  correction.innerHTML = 'You got ' + scoreNb + ' correct answers';
}

function resetGame() {
  modal.style.display = 'none';
  questionDiv.style.display = 'none';
  answer.style.display = 'none';
  btn.style.display = 'none';
  startBtn.style.display = 'block';
  answer.value = '';
  scoreNb = 0;
  number = 0;
}