let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win :) Your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScorePara.innerText = userScore;
    msg.style.backgroundColor = "green";
  } else {
    msg.innerText = `You loss :( ${compChoice} beats your ${userChoice}`;
    compScore++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("user choice  is =", userChoice);
  const compChoice = genCompChoice();
  //   console.log("comp choice is =", compChoice);

  if (userChoice === compChoice) {
    // console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "aquamarine";
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
