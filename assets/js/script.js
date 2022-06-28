// timer starts when button clicked

// leads to another q when u get it right or wrong
// track score

// VARS HTML
var score = document.querySelector("#scores");
var timer = document.querySelector("#timer");
var container = document.querySelector("#container");
var title = document.querySelector("#title");
var start = document.querySelector("#start");
var content = document.querySelector("#content");
var correctIncorrect = document.querySelector("#correctIncorrect");

// 
var currentScore = 0;
var timeLeft = 60;
var userInitial;
var currentQuestion = 0
// keeps the user not to see the highscore page until endQuiz
var isQuizOngoing = false;
// 3-5 question list 
var questionList = [];
// knowing this button is correct or not (if wrong timer - 10 secs)
// somehow move to the next question on the list, and also prompting new buttons of multiple choice
// track score
// score =0 if correct == true, score+20
// also need a var to store initials and score, as well as a submit button that -->
// display highscore screen
// (optional) add reset button for highscore

start.addEventListener('click', questionLoop);
score.addEventListener('click', showScore);
// QUESTIONS
const answer1 = ["1.asdf", "2. 2awdf", "3. asdf", "4. asdf"]
const question1 = ["Q1"];

const answer2 = ["1.asdf", "2. 2awdf", "3. asdf", "4. asdf"]
const question2 = ["Q2"];

const answer3 = ["1.asdf", "2. 2awdf", "3. asdf", "4. asdf"]
const question3 = ["Q3"];

const answer4 = ["1.asdf", "2. 2awdf", "3. asdf", "4. asdf"]
const question4 = ["Q4"];

const answer5 = ["1.asdf", "2. 2awdf", "3. asdf", "4. asdf"]
const question5 = ["Q5"];

var displayedQuestion = {
    question: ["1+1 ="]; 
    answer: ["2"];
    dummyAnswwers: ["4", "6", "8"]
}
// if answer selected then go next quesiton and add score
// if dummy is selected then go to next question timer - 10 sec

// this runs when user clicks button
function questionLoop () {
    runTimer();
    isQuizOngoing = true;
//FILL IT IN
// user clicked button
// Hide Start and COntent
    trackScore();
    nextQuestion();
}
function runTimer () {
    let clock = setInterval(function () {
        timeLeft--;
        timer.textContent = `Timer: ${timeLeft} secs`;
        // set condition when timer runs out
        if (timeLeft == 0) {
            endQuiz();
            clearInterval(clock);
            // set condition when user finishes before timer runs out
            // if (title.textContent !== "Done") {
            //     endQuiz();
            // }
        }
        
    }, 1000);
}
// CHeck if last question
// got to next question or end quiz


function nextQuestion () {
    // whether the object of the question array hits the end
    // if (currentQuestion < questionList.length)
    //  {
            // change question to next platform
    //  } else {
    //     endQuiz();
    // }
}

// Display score in html  (not certain whether we need to use data-state:hidden to visible)
function showScore() {
    if(!isQuizOngoing) {
        title.textContent = "HIGHSCORES"
    }
}

// return a score
function trackScore() {
    
}
// Display score and ask for userInital --> leads to show score
function endQuiz() {
    isQuizOngoing = false;
    // display button id user on html
}

// not sure if weneed this one
function restartQuiz() {
    
}

// 
function clearHighscore() {
    
}