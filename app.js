"use strict";
//Game State
const userInput = document.getElementById("user-guess");
const submitBtn = document.getElementById("user-answer");
let secretNumber = Math.floor(Math.random() * 50) + 1;
console.log(`Secret Number: ${secretNumber}`);
//Game Logic
// const guess = Number(userInput.value);
// if (!guess) {
//   messageDisplay.innerText = "Please enter a valid number!";
//   return;
// }
// console.log(guess);
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = Number(userInput.value);
  console.log("Player Guessed:", guess);
});
