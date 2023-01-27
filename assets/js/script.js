// Define variables
var startButton = document.querySelector("startBtn");


// function that allows user to start the quiz and timer countdown
   

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
        prompt: "Which symbol is used for comments in in the index.html file?",
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
]

var score = 0;

for(var i=0; i < questions.length; i++) {
    var choice = questions[i];
    if (choice == questions[i].answer) {
        score++;
    } else {
        secondsLeft - 10;
       // displayWrong();
    }
}


// create choice variables
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');

console.log(questions[0].prompt);
console.log(questions[0].answer);

console.log(questions[1].prompt);
console.log(questions[1].answer);

console.log(questions[2].prompt);
console.log(questions[2].answer);


console.log(questions[3].prompt);
console.log(questions[3].answer);


// Section for Timer Countdown
// Select elements by class
var start = document.querySelector("startBtn");


// Select elements by their id
var mainEl = document.getElementById("main");

// Set timer count
var secondsLeft = 61;

// Set event listener for start timer and decrement

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--; 
        timer.textContent = "Time remaining: " + secondsLeft + " s";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}

// Set display message if player runs out of time 
function displayMessage() {
    timer.textContent = "TIME'S UP! GAME OVER.";
    var gameOver = document.createElement("div");
    gameOver.setAttribute("class", "plain");
    mainEl.appendChild(gameOver);
}

setTime();