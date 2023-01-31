// Define variables
var startButton = document.querySelector(".startBtn");

var timer = document.querySelector("h1");

var btn = document.getElementById("choice-buttons")

var choice1 = document.getElementById('Choice1');
var choice2 = document.getElementById('Choice2');
var choice3 = document.getElementById('Choice3');
var choice4 = document.getElementById('Choice4');

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


// function that displays the current question 

var questionDiv = document.querySelector('#questions')

function displayQuestion() {
    choice1.textContent = questions[index].prompt[0];
    return;
}

// function that displays the option for the current question 

function displayChoices() {

    choice1.textContent = questions[index].options[1];
    choice2.textContent = questions[index].options[2];
    choice3.textContent = questions[index].options[3];
    choice4.textContent = questions[index].options[4];
      
};

// time penalty for incorrect answer
btn.addEventListener('click', function(event) {
    if (event.target.innerText != questions[index].answer)
    (secondsLeft-=10);
})

btn.addEventListener('click', function(event) {
   if (event.target.innerText == questions[index].answer)
   index++;
   score++;
   nextQuestion();
   displayChoices(); 
})
console.log(score);


//once the user picks an answer
//if we are not at the end of the array(hint: compare questions arr length 
//to index), then index++
// displayQuestion()
// }

var container = document.querySelector('.container');
var timerMessage = document.querySelector('.timerMessage');
var questionContainer = document.querySelector('#question-container');
var startPage = document.querySelector('#Start_Page');

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

