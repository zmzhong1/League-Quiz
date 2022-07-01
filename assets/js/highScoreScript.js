var nameSpan = document.querySelector("#userName");
var scoreSpan = document.querySelector("#score");

// Displays the initals and score on the scoreboard page
function renderScore() {
    var name = localStorage.getItem("initial");
    var score = localStorage.getItem("currentScore");
    console.log(name);
    console.log(score);
    if(!name || !score) {
        return;
    }
    nameSpan.textContent = "Name: " + name;
    scoreSpan.textContent = "Score: " + score;
}

renderScore();