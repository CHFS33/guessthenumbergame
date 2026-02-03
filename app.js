"use strict";
//Game State
const messageDisplay = document.getElementById("message-text");
const scoreDisplay = document.getElementById("current-score");
const roundDisplay = document.getElementById("round-display");
const totalScoreDisplay = document.getElementById("total-round-score");
const userInput = document.getElementById("user-guess");
const submitBtn = document.getElementById("user-answer");
let secretNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 10;
let highScore = 0;
let currentRound = 1;
console.log(`Secret Number: ${secretNumber}`);
//Game Logic
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = Number(userInput.value);
  if (!guess) {
    messageDisplay.innerText = "⛔ No number inputted!";
    return;
  }
  if (guess === secretNumber) {
    messageDisplay.innerText = "🎉 Winner!";
    if (currentScore > highScore) {
      highScore = currentScore;
      totalScoreDisplay.innerText = `High Score ${highScore}`;
    }
  } else if (guess !== secretNumber) {
    if (currentScore > 1) {
      messageDisplay.innerText =
        guess > secretNumber ? "📈Too High!" : "📉Too  Low!";
      currentScore = currentScore - 1;
      scoreDisplay.innerText = `Current Score: ${currentScore}`;
    } else {
      messageDisplay.innerText = "You lost this round!";
      scoreDisplay.innerText = 0;
    }
  }
});
const againBtn = document.querySelector(".again");
againBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentScore = 10;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  messageDisplay.innerText = "Start Guessing...";
  scoreDisplay.innerText = `Current Score: ${currentScore}`;
  roundDisplay.innerText = `Round: ${currentRound ++}`;
  userInput.value = "";
});
