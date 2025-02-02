// app.js

// ========== DOM ELEMENTS ==========
// PS: You can use the getElementById method to grab the elements or use querySelector
// Grab the Start button element
let startButton = document.getElementById("startButton"); // using getElementById
let userChoiceDisplay = document.querySelector("#userChoice"); // using querySelector
let computerChoiceDisplay = document.getElementById(`computerChoice`); // grab the computerChoice id
let resultDisplay = document.getElementById(`result`); // grab the result id
let winsDisplay = document.getElementById(`wins`); // grab the wins id
let lossesDisplay = document.getElementById(`losses`); // grab the losses id
let tiesDisplay = document.getElementById(`ties`); // grab the ties id

// ========== GAME STATE VARIABLES ==========
// Track the state of the game
let userChoice = document.getElementById(`userChoice`); // Store the user's choice

// Track the score: wins, losses, and ties initialized to 0
let wins = 0;
let losses = 0; // initialize losses to 0
let ties = 0; // initialize ties to 0

// Available choices for the game
const choices = ["rock", "paper", "scissors"];

// ========== EVENT LISTENERS ==========
// add an event listener to rock button in your index.html (e,g, <div id="rock">...</div>)
document
  .getElementById("rock")
  .addEventListener("click", () => selectChoice("rock"));
// add an event listener to paper button in your index.html
document
  .getElementById("paper")
  .addEventListener("click", () => selectChoice("paper"));
// add an event listener to scissors button in your index.html
document
  .getElementById("scissors")
  .addEventListener("click", () => selectChoice("scissors"));
// add an event listener to the startButton and call the playGame function
document.getElementById("startButton").addEventListener("click", playGame);
// add an event listener to the resetButton and call the resetGame function
document.getElementById("resetButton").addEventListener("click", resetGame);

window.addEventListener("beforeunload", function (event) {
  // Display a confirmation dialog to prevent accidental page reloads and loss of data
  event.preventDefault(); // Some browsers require this to show the dialog
  event.returnValue = "";
});

// ========== FUNCTIONS ==========
/**
 * Updates the user's choice and enables the Start button.
 * this function has a parameter "choice"
 */
function selectChoice(choice) {
  // Update the user's choice with the selected choice
  userChoice = choice;

  // Update the user's choice display by adding an image of the choice to the userChoiceDisplay html element
  userChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${choice}.png" alt="${choice}" class='choice--img'/>`;

  // will update the computer choice display with the computer icon to prevent confusion
  computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-computer.png" alt="icon-computer" class='choice--img'/>`;

  // Enable the Start button
  startButton.disabled = false;
}

/**
 * A function that generates a random choice for the computer.
 * this function returns a random choice from the choices array
 * here's the randomizer: Math.floor(Math.random() * choices.length)
 **/
function getComputerChoice() {
  // Return a random choice from the 'choices' array
  const randomIndex = Math.floor(Math.random() * choices.length); // generate a random index
  return choices[randomIndex]; // return the choice at the random index
}

/**
 * Determines the winner of the game.
 * this function has two parameters: userChoice and computerChoice
 * this function returns 'win', 'lose', or 'draw'
 */
function determineWinner(userChoice, computerChoice) {
  // Add logic to compare choices and return the result
  // Hint: Use if-else statements
  if (userChoice === computerChoice) {
    result = "draw";
    updateResultDisplay("It's a Draw!", "yellow"); // It's a tie
  }

  // && is the logical AND operator just like in Python (e.g., if True and False) it returns False because one of the conditions is False
  // || is the logical OR operator just like in Python  (e.g., if True or False) it returns True because one of the conditions is True
  else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    throwConfetti(); // Trigger confetti when the user wins
    result = "win";
    updateResultDisplay("You Win!", "green"); // based on the conditions above, what should be returned?
  } else {
    result = "lose";
    updateResultDisplay("You Lose!", "red"); // since it's not a draw or a win, what should be returned?
  }
  return result;
}

// will check if the user has won, lost or drawn
// and update the resultDisplay with the message and color
function updateResultDisplay(message, color) {
  resultDisplay.textContent = message;
  resultDisplay.style.color = color;
}

// Function to throw confetti when the user wins
function throwConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}

/**
 * Updates the score based on the result of the game.
 * this function has a parameter "result"
 */
function updateScore(result) {
  // Update the score based on the result
  if (result === "win") {
    wins++; // increment wins by 1, same as wins = wins + 1
    winsDisplay.textContent = wins; // update the winsDisplay with the new value
  } else if (result === "lose") {
    losses++; // increment losses by 1
    lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
  } else {
    ties++;
    tiesDisplay.textContent = ties; // update the tiesDisplay with the new value
  }
}

/**
 * Main game function triggered when the Start button is clicked.
 */
function playGame() {
  console.log("Game started!");
  // Step 1: Get the computer's choice
  const computerChoice = getComputerChoice(); // call the computer choice function

  // Step 2: Compare the user's choice and the computer's choice
  const result = determineWinner(userChoice, computerChoice); // determine the winner (win, lose, draw)

  // Step 3: Update the UI with the computer's choice
  // Update the computerChoiceDisplay here, similar to the userChoiceDisplay but for the computer
  computerChoiceDisplay.innerHTML = `<img src="./assets/images/icon-${computerChoice}.png" alt="${computerChoice}" class='choice--img'/>`;

  // Step 4: Display the result of the game (win, lose, draw)
  // Update the resultDisplay here
  if (result === "draw") {
    resultDisplay.textContent = "It's a Draw!"; // P.S: You can use innerHTML here but textContent is better for just text content
  } else if (result === "win") {
    resultDisplay.textContent = "You Win!";
  } else {
    resultDisplay.textContent = "You Lose!";
  }

  // Step 5: Update the score
  // Call the updateScore function and pass the result as an argument
  updateScore(result);
}

// Reset the game
function resetGame() {
  // Reset the user's choice
  userChoice = "";

  // Reset the userChoiceDisplay to '<img src="./assets/images/icon-user.png" alt="user" class="choice--img">'
  userChoiceDisplay.innerHTML =
    '<img src="./assets/images/icon-user.png" alt="user" class="choice--img">';

  // Reset the computerChoiceDisplay to '<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">';
  computerChoiceDisplay.innerHTML =
    '<img src="./assets/images/icon-computer.png" alt="computer" class="choice--img">';

  // Reset the resultDisplay to 'Choose your weapon!'
  resultDisplay.textContent = "Choose your weapon!";

  // Reset the all score variables to 0
  wins = 0;
  losses = 0; // ...
  ties = 0; // ...

  // Update the score displays
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses; // update the lossesDisplay with the new value
  tiesDisplay.textContent = ties; // update the tiesDisplay with the new value
  // Disable the Start button
  startButton.disabled = true;
}
