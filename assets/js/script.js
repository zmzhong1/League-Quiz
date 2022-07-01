var highscore = document.querySelector("#scores");
var timer = document.querySelector("#timer");
var content = document.querySelector(".content");
var question = document.querySelector("#question");
var pressBtn = document.querySelector(".pressBtn");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var score = document.querySelector("#currentScore");

//  Global variable 
var currentScore = 0;
var timeLeft = 60;
var userInitial;
var currentQuestion = 0;

// Questions and answers in object array
var arrayQuestion = [
    {
        prompt: "What does the abbreviation TFT stand for?",
        choice: ["Teams fight Teams", "Team for Team", "Teamfight Tactics", "Teams for Tactics"],
        answer: "Teamfight Tactics",
    },
    {
        prompt: "Who created Blitzcrank?",
        choice: ["Viktor", "Dr. Mundo", "Camille", "Urgot"],
        answer: "Viktor",
    },
    {
        prompt: "How many champions were available when the game was released?",
        choice: ["30","50", "20", "40"],
        answer: "40",
    },
    {
        prompt: "How is Ashe’s bow called?",
        choice: ["Ashe’s Bow", "Magical Bow", "Avarosa’s Bow", "Freljord’s Bow"], 
        answer: "Avarosa’s Bow",
    },
    {
        prompt: "Who was Gangplank’s first love?",
        choice: ["Illaoi", "Miss Fortune","Caitlyn", "Cassiopeia"], 
        answer: "Illaoi",
    },
    
];

// // Initiate the quiz
function init () {
    score.textContent = "Current Score is " + currentScore;
    runTimer();
    renderCode(currentQuestion);        
}

init();

// Timer runs
function runTimer () {
    var clock = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer:" + timeLeft +" secs";
        // set condition when timer runs out
        if (timeLeft == 0) {
            alert("TIME OUT!");
            clearInterval(clock);
            endQuiz();
        }
    }, 1000);
}

// renders the prompt and multiple choice on the screen
function renderCode(num) {
    question.textContent = arrayQuestion[num].prompt;
    button1.textContent = arrayQuestion[num].choice[0];
    button2.textContent = arrayQuestion[num].choice[1];
    button3.textContent = arrayQuestion[num].choice[2];
    button4.textContent = arrayQuestion[num].choice[3];
}

// Compares the selected multiple choice to the answer, +20 score if correct answer and -5sec for wrong answer. Goes to next question
function trackScore(event) {
    var element = event.target.textContent;
    var correctAnswer = arrayQuestion[currentQuestion].answer;
    if (element == correctAnswer) {
        currentScore += 20;
        score.textContent = "Current Score: "+ currentScore;
    } else { 
        timeLeft -= 5;
        console.log(timeLeft);
    }
    currentQuestion++;
    console.log(currentQuestion);
    nextQuestion();
}

pressBtn.addEventListener("click", trackScore);

// Goes to next quiz question
function nextQuestion () {
    if (currentQuestion < 5) {
        renderCode(currentQuestion);
    } else {
        endQuiz();
    }
}

// Opens new html when the quiz is finished
function endQuiz() {
    localStorage.setItem("currentScore", currentScore);
    window.location.href = 'endQuiz.html';
}

