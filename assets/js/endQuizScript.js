var initialInput = document.querySelector("#initial");
var submitBtn = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");

//add user's initial and store into local storage
function addInitial(event) {
    event.preventDefault();
    var initial = document.querySelector("#initial").value;
    console.log(initial);
    if (initial === "") {
        alert("error", "Password cannot be blank");
    } else {
        alert("success", "Registered successfully");
        localStorage.setItem("initial", initial);
        window.location.href = 'highscore.html';
    }
};

submitBtn.addEventListener("click", addInitial);
