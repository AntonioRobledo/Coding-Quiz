// Define variables
var startButton = document.querySelector(".startBtn");

var timer = document.querySelector("h1");

var btn = document.getElementById("choice-buttons")

var choice1 = document.getElementById('Choice1');
var choice2 = document.getElementById('Choice2');
var choice3 = document.getElementById('Choice3');
var choice4 = document.getElementById('Choice4');

var container = document.querySelector('.container');
var timerMessage = document.querySelector('.timerMessage');
var questionContainer = document.querySelector('#question-container');
var startPage = document.querySelector('#Start_Page');
var questionDiv = document.querySelector('#questions');


// Prompts and answers
var questions = [

    { 
        prompt: "Which of the following is NOT a JavaScript data type?",
        options: {
            1: 'Boolean',
            2: 'Number',
            3: 'String',
            4: 'DOM',
        },
        answer: 'DOM'
    },

    { 
        prompt: "Which symbol is used for comments in the index.html file?",
        options: {
            1: '//',
            2: '<!--',
            3: '/*',
            4: '--',
        },
        answer: '<!--'
    },

    {
        prompt: "Which of the following is considered a self-closing tag?",
        options: {
            1: '<h1>',
            2: '<li>',
            3: '<br>',
            4: '<ul>',
        },
        answer: '<br>'
    },

    {
        prompt: "Which is the correct symbol for a class selector in CSS?",
        options: {
            1: '$',
            2: '.',
            3: '#',
            4: '&',
        },
        answer: '.'
    },
];

var score = 0;
var index = 0; 

// function that displays the option for the current question 

function displayChoices() {

    choice1.textContent = questions[index].options[1];
    choice2.textContent = questions[index].options[2];
    choice3.textContent = questions[index].options[3];
    choice4.textContent = questions[index].options[4];
      
};

var displayWrong = document.createElement('div');
displayWrong.innerText = 'Wrong!';

var displayCorrect = document.createElement('div');
displayCorrect.innerText = 'Correct!';


btn.addEventListener('click', function(event) {
   if (event.target.innerText == questions[index].answer 
    || questions[index].length < questions.length) {
    index++;
    score++;
    nextQuestion();
    displayChoices();
    displayCorrect.innerText;
   } else if (event.target.innerText != questions[index].answer) {
    index++;
    secondsLeft-=10;
    nextQuestion();
    displayChoices(); 
   } else if (index === questions.length - 1)
   return;
    console.log(score);
  }
);

//once the user picks an answer
//if we are not at the end of the array(hint: compare questions array length 
//to index), then index++
// displayQuestion()
// }
 
// Set timer count
var secondsLeft = 60;

// create function that runs timer 

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        timer.textContent = "Time remaining: " + secondsLeft + " s";

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}

// create a function that will hide the title page 
// and display the first question

function titlePage() {
    startPage.classList.add('hide');
    startPage.textContent = nextQuestion();
    return;
}

// Set display message if player runs out of time 
function displayMessage() {
    container.classList.add('hide')
    timerMessage.textContent = "TIME'S UP! GAME OVER.";
    return;
}

function nextQuestion() {
    questionContainer.classList.add('hide')
    questionDiv.textContent = questions[index].prompt;
    return;
}
        

// set event listener for timer 
startButton.addEventListener("click", function() {
    setTime(); 
    displayChoices();
    titlePage();
    nextQuestion();
})
 
// high score page 
var highScores = document.querySelector('#highscore-container');
var scores = document.querySelector('#results');

function highScore() {
    highScores.classList.add('hide')
    return;
};

// stores the users score
localStorage.setItem('quizScore', score);

