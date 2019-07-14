let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreCard_div = document.querySelector(".score-card");
const result_p = document.querySelector("#results>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomPos = Math.floor(Math.random() * Math.floor(3));
  return choices[randomPos];
}
function win(userChoice, ComputerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;

  const smallWordUser = "user".fontsize(0.25).sub();
  const smallWordComp = "comp".fontsize(0.25).sub();
  result_p.innerHTML = `${convertToWord(
    userChoice
  )}${smallWordUser} beats ${convertToWord(
    ComputerChoice
  )}${smallWordComp}, You Win🔥`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("green-glow"),
    300
  );

  console.log("User wins!🔥");
  console.log("User score ===> " + userScore);
}

function lose(userChoice, ComputerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  console.log("Computer score ===> " + computerScore);
  const smallWordUser = "user".fontsize(0.25).sub();
  const smallWordComp = "comp".fontsize(0.25).sub();
  console.log("User loses!😥");
  result_p.innerHTML = `${convertToWord(
    ComputerChoice
  )}${smallWordComp}  beats ${convertToWord(
    userChoice
  )}${smallWordUser}, You lose😥`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(
    () => document.getElementById(userChoice).classList.remove("red-glow"),
    300
  );
  console.log("User loses!😥");
  console.log("User score ===> " + userScore);
}

function draw(userChoice, ComputerChoice) {
  console.log("Drawww");
  const smallWordUser = "user".fontsize(0.25).sub();
  const smallWordComp = "comp".fontsize(0.25).sub();
  result_p.innerHTML = `${convertToWord(
    ComputerChoice
  )}${smallWordComp} and ${convertToWord(
    userChoice
  )}${smallWordUser} are equal, Its a draw😬`;
  document.getElementById(userChoice).classList.add("grey-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("grey-glow");
  }, 300);
}

function game(userChoice) {
  let computeChoice = getComputerChoice();
  switch (userChoice + computeChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computeChoice);
      break;
    case "rp":
    case "ps":
    case "rp":
      lose(userChoice, computeChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computeChoice);
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}
main();
