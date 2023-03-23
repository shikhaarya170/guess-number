let guessesRemaining = 4;
let randomNumber = "";

window.onload = () => {
  randomNumber = getARandomNumber();
  console.log(randomNumber);
};

function getARandomNumber() {
  return Math.floor(Math.random() * 20);
}

const check = document.querySelector(".check");
check.addEventListener("click", function () {
  if (guessesRemaining <= 0) {
    check.disabled = true;
    revealAnswer();
  } else {
    const userGuess = Number(document.querySelector(".guess").value);
    if (typeof userGuess !== "number") alert("Enter a number");
    else {
      if (userGuess === randomNumber) {
        alert("Congratulations, You are a genius!!!");
        location.reload()
      } else {
        if (userGuess > 20) {
          alert("Write a number from 1 to 20");
          guessesRemaining--;
        }
        if (userGuess - randomNumber >= 10 || userGuess - randomNumber <= -10) {
          alert("You're too far..");
          guessesRemaining--;
        } else {
          if (
            (userGuess - randomNumber < 10 && userGuess - randomNumber > 5) ||
            (userGuess - randomNumber > -10 && userGuess - randomNumber <= -5)
          ) {
            alert("You're close, keep trying..");
            guessesRemaining--;
          } else {
            if (userGuess - randomNumber < 5 || userGuess - randomNumber > -5) {
              alert("Almost there...");
              guessesRemaining--;
            }
          }
        }
      }
    }
  }
});

function revealAnswer() {
  alert(
    "Sorry, your chances are over\n Better luck next time.\n The answer was " +
      randomNumber
  );
}
