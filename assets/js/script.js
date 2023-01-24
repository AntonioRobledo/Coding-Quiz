// Select elements by class
var timer = document.querySelector(".timer");

// Select elements by their id
var mainEl = document.getElementById("main");

// Set timer count
var secondsLeft = 61;

// Set timer interval and decrement
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